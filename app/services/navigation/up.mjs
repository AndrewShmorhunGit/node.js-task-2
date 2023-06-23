import * as path from "node:path";
import OperationFailedError from "../../errors/OperationFailedError.mjs";

export default async function (session, args) {
  if (args && args.length > 0) {
    throw new OperationFailedError();
  }

  try {
    session.path = path.resolve(session.path, "..");
  } catch (e) {
    throw new OperationFailedError();
  }
}
