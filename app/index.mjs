import Application from "./app/Application.mjs";
import ErrorHandler from "./app/ErrorHandler.mjs";
import CommandLine from "./app/CommandLine.mjs";
// And change wrong extensions

const application = new Application();
const errorHandler = new ErrorHandler();
const commandLine = new CommandLine(application.getSession());

commandLine.init(async (input) => {
  try {
    await application.run(input);
  } catch (e) {
    errorHandler.handle(e);
  }
});
