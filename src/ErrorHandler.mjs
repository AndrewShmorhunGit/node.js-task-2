import { ActionNotFound } from "./errors/ActionNotFound.mjs";
import { errors } from "./messages/error.mjs";
import { log, styles } from "./styles/styles.mjs";

export class ErrorHandler {
  // Handle application exceptions @param e

  handle(e) {
    let errorMessage;

    if (e instanceof ActionNotFound) {
      errorMessage = errors.invalidOutput;
    } else {
      errorMessage = e.message;
    }

    log(errorMessage, styles.error);
  }
}
