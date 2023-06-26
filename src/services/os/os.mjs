import * as sys from "node:os";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";
import { log, styles } from "../../styles/styles.mjs";

export async function os(session, args) {
  if (args && args.length !== 1) {
    throw new OperationFailedError();
  }

  try {
    let result = "";

    switch (args[0]) {
      case "--EOL":
        result = sys.EOL;
        break;
      case "--cpus":
        result = sys.cpus();
        break;
      case "--homedir":
        result = sys.homedir();
        break;
      case "--username":
        result = sys.userInfo().username;
        break;
      case "--architecture":
        result = sys.arch();
        break;
      default:
        throw new Error();
    }

    args[0] === "--cpus"
      ? console.table(
          result.map((core) => {
            const { model, speed } = core;
            return { model, speed };
          })
        )
      : log(result, styles.info);
  } catch (e) {
    throw new OperationFailedError();
  }
}
