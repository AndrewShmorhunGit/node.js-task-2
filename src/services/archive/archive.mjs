import path from "node:path";
import fs from "node:fs";
import { parsePaths, fileExist } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function archive(session, args, archStrategy) {
  try {
    const argPaths = parsePaths(args.join(" "), 2);

    const from = path.resolve(session.path, argPaths[0]);
    const to = path.resolve(session.path, argPaths[1]);

    await new Promise(async (resolve, reject) => {
      if (await fileExist(to)) {
        return reject();
      }

      const writeStream = fs.createWriteStream(to);

      const readStream = fs.createReadStream(from);

      readStream.pipe(archStrategy).pipe(writeStream);

      readStream.on("end", () => {
        resolve();
      });

      readStream.on("error", (e) => {
        archStrategy.close();
        writeStream.close();
        fs.rmSync(to);
        reject(e);
      });

      archStrategy.on("error", (e) => {
        readStream.close();
        writeStream.close();
        fs.rmSync(to);
        reject(e);
      });

      readStream.on("error", (e) => {
        archStrategy.close();
        writeStream.close();
        fs.rmSync(to);
        reject(e);
      });
    }).catch(() => {
      throw new Error();
    });
  } catch (e) {
    throw new OperationFailedError();
  }
}
