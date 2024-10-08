export interface CompileOptions {
  source: string;
  /**
   * Name of the main function in the program
   * @default main
   */
  entry?: string;
  globalIdentifiers?: string[];
}
export function compile(options: CompileOptions) {
  const parameters = parseFunctionParameters(options.source, options.entry ?? "main");
  const entryParameters = getUniqueIdentifiers(options.globalIdentifiers ?? [], parameters);
  const returnStatement = `return ${options.entry ?? "main"}(${entryParameters.join(",")})`;
  const boundFn = new Function(...(options.globalIdentifiers ?? []), ...entryParameters, `"use strict";\n${options.source}\n${returnStatement}`);

  return boundFn;
}
function parseFunctionParameters(source: string, functionName: string) {
  const entryFunctionPattern = new RegExp(`function\\s+${functionName}\\((.*?)\\)`);
  const match = source.match(entryFunctionPattern);
  if (!match) throw new Error(`No entry function of name "${functionName}"`);

  const parameters =
    match?.[1]
      .trim()
      ?.split(",")
      .map((i) => i.trim())
      .filter(Boolean) ?? [];

  return parameters;
}

function getUniqueIdentifiers(existingIdentifiers: string[], baseNames: string[]): string[] {
  return baseNames.map((baseName) => getUniqueIdentifier(existingIdentifiers, baseName));
}

function getUniqueIdentifier(existingIdentifiers: string[], baseName: string): string {
  let identifier = baseName;
  let count = 0;
  while (existingIdentifiers.includes(identifier)) {
    count++;
    identifier = `${baseName}_${count}`;
  }
  return identifier;
}
