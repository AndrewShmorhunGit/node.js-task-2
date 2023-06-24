import path from "node:path";
import fs from "node:fs";
import { parsePaths, fileExist } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export default async function (session, args) {
  try {
    const argPaths = parsePaths(args.join(" "), 1);

    const filePath = path.resolve(session.path, argPaths[0]);

    if (await fileExist(filePath)) {
      throw new Error("File exist");
    }

    fs.closeSync(fs.openSync(filePath, "w"));
  } catch (e) {
    throw new OperationFailedError();
  }
}
