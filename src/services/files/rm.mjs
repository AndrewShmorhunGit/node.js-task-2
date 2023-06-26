import path from "node:path";
import fs from "node:fs/promises";
import { parsePaths } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function rm(session, args) {
  try {
    const argPaths = parsePaths(args.join(" "), 1);

    const filePath = path.resolve(session.path, argPaths[0]);

    await fs.rm(filePath);
  } catch (e) {
    throw new OperationFailedError();
  }
}
