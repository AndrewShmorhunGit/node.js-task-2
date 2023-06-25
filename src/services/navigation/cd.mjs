import path from "node:path";
import fs from "node:fs/promises";
import { parsePaths } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function cd(session, args) {
  try {
    const argPaths = parsePaths(args.join(" "), 1);

    let to = argPaths[0];

    if (to.startsWith('"') && to.endsWith('"')) {
      to = to.substring(1, to.length - 1);
    }
    if (to.startsWith("'") && to.endsWith("'")) {
      to = to.substring(1, to.length - 1);
    }

    const newPath = path.resolve(session.path, to);
    await fs.access(newPath);
    session.path = newPath;
  } catch (e) {
    throw new OperationFailedError();
  }
}
