import { ActionNotFound } from "../app/errors/ActionNotFound.mjs";
import { errors } from "./messages/error.mjs";

export class ErrorHandler {
  // Handle application exceptions @param e

  handle(e) {
    let errorMessage;

    if (e instanceof ActionNotFound) {
      errorMessage = errors.invalidOutput;
    } else {
      errorMessage = e.message;
    }

    console.log(errorMessage);
  }
}
