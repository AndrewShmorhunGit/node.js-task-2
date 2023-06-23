import { errors } from "../messages/error.mjs";

export class OperationFailedError extends Error {
  message = errors.operationFailed;
}
