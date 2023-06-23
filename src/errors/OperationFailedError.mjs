import { errors } from "../content/error.mjs";

export class OperationFailedError extends Error {
  message = errors.operationFailed;
}
