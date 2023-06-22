<<<<<<< Updated upstream
import readline from "node:readline";
import { stdin, stdout } from "node:process";
// import os from "node:os";

=======
<<<<<<< Updated upstream
=======
import readline from "node:readline";
import { stdin, stdout } from "node:process";
import os from "node:os";

>>>>>>> Stashed changes
>>>>>>> Stashed changes
export class CommandLine {
  #session;
  #rl;

  constructor(session) {
    this.#session = session;
  }

  // Init command line work @param lineCallback

  init(lineCallback) {
    this.#greeting();

    this.#rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });

    this.startNewLine();

    this.#rl.on("line", async (input) => {
      if (input === ".exit") {
        return this.exit();
      }

      await lineCallback(input);

      this.startNewLine();
    });

    this.#rl.on("SIGINT", () => this.exit(true));
  }

  // Print greeting
  #greeting() {
    console.log(`Welcome to the File Manager, ${this.#session.user}!`);
  }

  startNewLine() {
    this.printCurrentPath();
    this.#rl.prompt();
  }

  // Print current path for user
  printCurrentPath() {
    console.log(`You are currently in ${this.#session.path}`);
  }

  // Exit handler @param withOEL

  exit = (withOEL = false) => {
    const eol = withOEL ? os.EOL : "";

    console.log(
      `${eol}Thank you for using File Manager, ${this.#session.user}!`
    );

    this.#rl.close();
  };
}
