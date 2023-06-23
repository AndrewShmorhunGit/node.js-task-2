import readline from "node:readline";
import os from "node:os";
import { stdin, stdout } from "node:process";
import { log, styles } from "./styles/styles.mjs";

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
    log(`Welcome to the File Manager, ${this.#session.user}!`, styles.success);
  }

  // Exit handler @param withOEL

  exit = (withOEL = false) => {
    const eol = withOEL ? os.EOL : "";

    log(
      `${eol}Thank you for using File Manager, ${this.#session.user}!`,
      styles.success
    );

    this.#rl.close();
  };

  startNewLine() {
    this.printCurrentPath();
    this.#rl.prompt();
  }

  // Print current path for user
  printCurrentPath() {
    log(`You are currently in ${this.#session.path}`, styles.info);
  }
}
