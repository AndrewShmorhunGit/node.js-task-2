export class Application {
  // Session object @type {null|Object}
  #session = null;

  getSession() {
    return this.#session;
  }

  // Before the app running we need to prepare the session. And take that preparation constructor function, for this inheritance! Using Auth..

  constructor() {
    this.PrepareSession();
  }

  prepareSession() {
    // Authentication fn
  }

  // And then run()
  // @param line;
  // @returns {Promise<void>}

  async run(line) {
    // to run app we need to accept args, and actions
    const { action, args } = Application.#prepareParams(line);

    // And route to our actions
    // const actionRunner = new Router();
    // await actionRunner.run(action, this.#session, args);
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
}
