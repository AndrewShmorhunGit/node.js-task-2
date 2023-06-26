import path from "node:path";
import { readFile } from "node:fs/promises";
import { parsePaths } from "../../utils/functions.mjs";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";
import { log, styles } from "../../styles/styles.mjs";

export async function hash(session, args) {
  try {
    const filePath = parsePaths(args.join(" "), 1).pop();
    const fullPath = path.resolve(session.path, filePath);
    const content = await readFile(fullPath);

    const { createHash } = await import("crypto");

    const hex = createHash("sha256").update(content).digest("hex");

    log(hex);
  } catch (e) {
    throw new OperationFailedError();
  }
}
