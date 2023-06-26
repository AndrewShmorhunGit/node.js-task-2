import { Auth } from "./Auth.mjs";
import path from "node:path";
import os from "node:os";
import { Router } from "./Router.mjs";

export class Application {
  // Session object @type {null|Object}
  #session = null;

  // Before the app running we need to prepare the session. And take that preparation constructor function, for this inheritance! Using Auth..

  constructor() {
    this.prepareSession();
  }

  prepareSession() {
    // Authentication

    const auth = new Auth();
    // and finally initialize the session
    this.#session = {
      user: auth.login(),
      path: path.resolve(os.homedir()),
    };
  }

  // And then run()
  // @param line;
  // @returns {Promise<void>}

  async run(line) {
    // To run app we need to accept args, and actions
    const { action, args } = Application.#prepareParams(line);

    // And route to our actions
    const actionRunner = new Router();
    await actionRunner.run(action, this.#session, args);
  }
  // Args and action description:

  // Prepare action and args

  // @param line @returns {{args: *, action: unknown}}

  static #prepareParams(line) {
    const args = line.split(" ");
    const action = args.shift();

    return {
      action,
      args,
    };
  }

  getSession() {
    return this.#session;
  }
}
