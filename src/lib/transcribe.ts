import { Subject } from "rxjs";

export interface TranscribeOptions {
  locale?: "en-US";
  profanityFilterMode?: "None" | "Masked" | "Removed" | "Tags";
  accessToken: string;
  mediaRecorder: MediaRecorder;
  onSpeechEnded?: () => void;
  onTextStarted?: () => void;
}

export interface TranscribeResult {
  combinedPhrases: [
    {
      channel: number;
      text: string;
    }
  ];
  duration: number;
  phrases: [
    {
      channel: number;
      confidence: number;
      duration: number;
      locale: string;
      offset: number;
      text: string;
      words: [
        {
          text: string;
          offset: number;
          duration: number;
        }
      ];
    }
  ];
}

export function useTranscription() {
  const $transcriptions = new Subject<TranscribeResult>();
  let mediaRecorder: MediaRecorder;

  async function start() {
    if (!mediaRecorder) {
      mediaRecorder = new MediaRecorder(await navigator.mediaDevices.getUserMedia({ audio: true }));
    }
    mediaRecorder.start();

    transcribe({
      accessToken: "",
      mediaRecorder,
    }).then((result) => {
      $transcriptions.next(result);
    });
  }

  function stop() {
    mediaRecorder.stop();
  }

  return {
    $transcriptions,
    start,
    stop,
  };
}

export async function transcribe(options: TranscribeOptions): Promise<TranscribeResult> {
  const { accessToken, locale = "en-US", profanityFilterMode = "None", mediaRecorder } = options;

  let audioStream: ReadableStream;
  let writer: ReadableStreamDefaultController;

  audioStream = new ReadableStream({
    start(controller) {
      writer = controller;
    },
  });

  mediaRecorder.ondataavailable = (event) => {
    writer.enqueue(event.data);
  };

  mediaRecorder.onstop = () => {
    options.onSpeechEnded?.();
    writer.close();
  };

  const boundary = "----WebKitFormBoundary" + Math.random().toString(36).substring(2);

  const definition = JSON.stringify({
    locales: [locale],
    profanityFilterMode: profanityFilterMode,
    channels: [0, 1],
  });

  const formDataParts = [
    `--${boundary}\r\n`,
    'Content-Disposition: form-data; name="definition"\r\n',
    "Content-Type: application/json\r\n\r\n",
    definition + "\r\n",
    `--${boundary}\r\n`,
    'Content-Disposition: form-data; name="audio"; filename="audio.wav"\r\n',
    "Content-Type: audio/wav\r\n\r\n",
  ];

  const bodyStream = new ReadableStream({
    async start(controller) {
      for (const part of formDataParts) {
        controller.enqueue(new TextEncoder().encode(part));
      }

      const reader = audioStream.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        controller.enqueue(new Uint8Array(await value.arrayBuffer()));
      }

      controller.enqueue(new TextEncoder().encode(`\r\n--${boundary}--\r\n`));
      controller.close();
    },
  });

  const response = await fetch(`https://proto-api.azure-api.net/speechtotext/transcriptions:transcribe?api-version=2024-05-15-preview`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data; boundary=" + boundary,
    },
    // @ts-expect-error, ref: https://github.com/node-fetch/node-fetch/issues/1769
    duplex: "half",
    body: bodyStream,
  });

  const result = await response.json();
  options.onTextStarted?.();
  return result as TranscribeResult;
}
