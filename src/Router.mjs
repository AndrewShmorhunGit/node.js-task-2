import { ActionNotFound } from "../src/errors/ActionNotFound.mjs";

export class Router {
  // Set #routes param
  #routes = {
    // routes to actions..
    up: "./services/navigation/up.mjs",
  };

  // Run routing
  // @params action, session, args
  // @returns {Promise<void>}

  async run(action, session, args) {
    // Check an action
    if (!this.#actionExist(action)) {
      throw new ActionNotFound();
    }
    // Then run
    await this.#runAction(action, session, args);
  }

  // Check action for existence
  // @params action
  // @returns {boolean}

  #actionExist(action) {
    return this.#routes.hasOwnProperty(action);
  }

  // Run action
  // @params action, session, args
  // @returns {Promise<void>}

  async #runAction(action, session, args) {
    const { default: actionFn } = await import(this.#routes[action]);
    await actionFn(session, args);
    // console.log(actionFn);
  }
}
