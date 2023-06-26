import fs from "node:fs/promises";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";
import { TabletListStyle } from "../../styles/styles.mjs";
import chalk from "chalk";

export async function ls(session, args) {
  if (args && args.length > 0) {
    throw new OperationFailedError();
  }

  try {
    const dirList = await fs.readdir(session.path, { withFileTypes: true });
    const result = [];

    dirList
      .sort((dirent, prevDirent) => (dirent.name > prevDirent.name ? 1 : -1))
      .map((dirent) => {
        const line = new TabletListStyle(
          dirent.name,
          dirent.isDirectory() ? "directory" : "file"
        );
        result.push(line);
      });
    console.table(result);
  } catch (e) {
    throw new OperationFailedError();
  }
}
