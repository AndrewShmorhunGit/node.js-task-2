import path from "node:path";
import { OperationFailedError } from "../../errors/OperationFailedError.mjs";

export async function up(session, args) {
  if (args && args.length > 0) {
    throw new OperationFailedError();
  }

  try {
    // One step back
    session.path = path.resolve(session.path, "..");
  } catch (e) {
    throw new OperationFailedError();
  }
}
