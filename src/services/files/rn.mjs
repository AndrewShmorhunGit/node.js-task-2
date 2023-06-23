import path from "node:path";
import fs from "node:fs/promises";
import { parsePaths, fileExist } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function rn(session, args) {
  try {
    const argPaths = parsePaths(args.join(" "), 2);

    const from = path.resolve(session.path, argPaths[0]);
    const to = path.resolve(session.path, argPaths[1]);

    await fs.access(from);

    if (await fileExist(to)) {
      throw new Error("Destination file already exists!");
    }

    await fs.rename(from, to);
  } catch (e) {
    throw new OperationFailedError();
  }
}
