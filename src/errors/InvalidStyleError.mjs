import { errors } from "../messages/error.mjs";

export class InvalidStyleError extends Error {
  message = errors.invalidStyle;
}
