import { errors } from "../content/error.mjs";

export class InvalidStyleError extends Error {
  message = errors.invalidStyle;
}
