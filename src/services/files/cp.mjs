import path from "node:path";
import fs from "node:fs/promises";
import { parsePaths } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

export async function cp(session, args) {
  try {
    console.log(args.join(" "));
    const argPaths = parsePaths(args.join(" "), 2);
    const file = path.resolve(session.path + "/" + argPaths[0]);
    const toFolder = path.resolve(session.path + "/" + argPaths[1]);
    console.log(`File: ${file}`);
    // const to = path.resolve(session.path, argPaths[1]);
    console.log(`Folder: ${toFolder}`);
    // console.log(from, to);

    await fs.cp(file, to, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });

    // const readableStream = createReadStream(file);
    // const writableStream = createWriteStream(folder);
    // await pipeline(readableStream, writableStream);
  } catch (e) {
    throw new OperationFailedError();
  }
}
