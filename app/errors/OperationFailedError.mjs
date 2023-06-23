import error from "../messages/error.mjs";

export default class OperationFailedError extends Error {
  message = error.operationFailed;
}
