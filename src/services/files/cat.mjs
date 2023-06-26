import path from "node:path";
import fs from "node:fs";
import { stdout } from "node:process";
import { parsePaths } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function cat(session, args) {
  try {
    const argPaths = parsePaths(args.join(" "), 1);

    const filePath = path.resolve(session.path, argPaths[0]);

    await new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath);
      stream.pipe(stdout);
      stream.on("end", () => {
        console.log();
        resolve();
      });
      stream.on("error", (e) => reject(e));
    }).catch(() => {
      throw new Error();
    });
  } catch (e) {
    throw new OperationFailedError();
  }
}
