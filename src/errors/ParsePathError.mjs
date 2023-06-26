import { errors } from "../content/error.mjs";

export class ParsePathError extends Error {
  message = errors.wrongFormat;
}
