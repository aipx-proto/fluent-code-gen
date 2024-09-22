export async function filesToNamedBlobUrls(fileList: FileList) {
  return Promise.all(
    [...fileList].map(async (file) => {
      return {
        name: file.name,
        url: await blobToDataUrl(file),
      };
    })
  );
}

async function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}
