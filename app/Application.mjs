export class Application {
  // Session object @type {null|Object}
  #session = null;

  getSession() {
    return this.#session;
  }
}
