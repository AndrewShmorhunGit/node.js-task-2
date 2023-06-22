export const messages = {
  welcome(user) {
    return `Welcome to the File Manager, ${user}!`;
  },
  bye(user) {
    return `Welcome to the File Manager, ${user}!`;
  },
  invalid: "Invalid input",
  failed: "Operation failed",
  exit: "To exit File Manager enter 'exit' or press 'Ctrl' + 'C'",
  currentlyIn: "You are currently in",
  undefined:
    "User is not initialized! Try again in format: 'npm run start -- --username=your_username'",
  errors: {
    dir: "Current directory does not exist",
    file: "Current file does not exist",
    error: "Something went wrong! Try again.. or not). It is an error!",
  },
};
