import path from "node:path";
import fs from "node:fs/promises";
import { parsePaths } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function mv(session, args) {
  try {
    const argPaths = parsePaths(args.join(" "), 2);

    const from = path.resolve(session.path, argPaths[0]);
    const to = path.resolve(session.path, argPaths[1]);

    await fs.cp(from, to, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    await fs.rm(from);
  } catch (e) {
    throw new OperationFailedError();
  }
}
