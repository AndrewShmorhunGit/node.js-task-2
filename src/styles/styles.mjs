import chalk from "chalk";
import { InvalidStyleError } from "../errors/InvalidStyleError.mjs";

export const styles = {
  standard: "standard",
  warning: "warning",
  error: "error",
  success: "success",
  info: "info",
};

export function log(text, style = styles.standard) {
  const log = console.log;

  if (typeof style === "undefined") {
    throw new InvalidStyleError();
  }

  if (style === styles.info) {
    return log(chalk.green(text));
  }

  if (style === styles.success) {
    return log(chalk.green.bold(text));
  }

  if (style === styles.warning) {
    return log(chalk.yellow.underline(text));
  }

  if (style === styles.error) {
    return log(chalk.red(text));
  }

  return log(chalk.green(text));
}

export class TabletListStyle {
  constructor(Name, Type) {
    this.Name = Name;
    this.Type = Type;
  }
}
