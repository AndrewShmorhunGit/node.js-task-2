import { ParsePathError } from "../errors/ParsePathError.mjs";
import { access } from "node:fs/promises";

export async function fileExist(path) {
  try {
    await access(path);
  } catch (e) {
    return false;
  }

  return true;
}

export function parsePaths(string, needArgCount = -1) {
  let isInQuotes = false,
    parsedPath = "",
    results = [];

  for (const index in string) {
    const char = string[index];
    if (char === '"' || char === "'") {
      isInQuotes = !isInQuotes;
      if (!isInQuotes && parsedPath.length > 0) {
        results.push(parsedPath);
        parsedPath = "";
        continue;
      }
      continue;
    } else if (!isInQuotes && char === " " && parsedPath.length) {
      results.push(parsedPath);
      parsedPath = "";
      continue;
    } else if (!isInQuotes && char === " ") {
      continue;
    }

    parsedPath += char;
  }

  if (isInQuotes) {
    throw new ParsePathError("Operation Failed, check argument quotes!");
  }

  if (parsedPath.length > 0 && !isInQuotes) {
    results.push(parsedPath);
  }

  if (needArgCount > 0 && results.length !== needArgCount) {
    throw new Error();
  }

  return results;
}
