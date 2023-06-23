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

  // Standard consol message style
  if (style === styles.info) {
    return log(chalk.green(text));
  }

  // Warning consol message style
  if (style === styles.success) {
    return log(chalk.green.bold(text));
  }

  // Warning consol message style
  if (style === styles.warning) {
    return log(chalk.yellow.underline(text));
  }

  // Error consol message style
  if (style === styles.error) {
    return log(chalk.red(text));
  }

  // Info consol message style
  if (style === styles.info) {
    return log(chalk.gray(text));
  }

  return log(chalk.green(text));
}
