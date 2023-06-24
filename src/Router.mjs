import { ActionNotFound } from "../src/errors/ActionNotFound.mjs";

export class Router {
  // Set #routes param
  #routes = {
    // routes to actions..
    up: "./services/navigation/up.mjs",
    cd: "./services/navigation/cd.mjs",
    ls: "./services/navigation/ls.mjs",
    os: "./services/os/os.mjs",
    hash: "./services/hash/hash.mjs",
    clear: "./services/console/clear.mjs",
    rn: "./services/files/rn.mjs",
    rm: "./services/files/rm.mjs",
    mv: "./services/files/mv.mjs",
    cp: "./services/files/cp.mjs",
    cat: "./services/files/cat.mjs",
    add: "./services/files/add.mjs",
    compress: "./services/files/compress.mjs",
    decompress: "./services/files/decompress.mjs",
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
    const { [action]: actionFn } = await import(this.#routes[action]);
    await actionFn(session, args);
    // console.log(actionFn);
  }
}
