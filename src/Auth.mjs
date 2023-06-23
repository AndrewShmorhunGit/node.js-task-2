export class Auth {
  // Login use @returns {string|any}

  login() {
    let username = process.argv
      .filter((arg) => arg.startsWith("--username"))
      .shift()
      ?.split("=")
      ?.pop();

    return username === undefined ? "Non authorized user" : username;
  }
}
