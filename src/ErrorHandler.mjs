export class ErrorHandler {
  // Handle application exceptions @param e

  handle(e) {
    let errorMessage;

    if (e instanceof ActionNotFound) {
      errorMessage = error.invalidOutput;
    } else {
      errorMessage = e.message;
    }

    console.log(errorMessage);
  }
}
