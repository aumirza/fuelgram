import { Conflict } from "http-errors";

export class DuplicateUserError extends Conflict {
  constructor(message = "User already exists") {
    super(message);
    this.name = "DuplicateUserError";
  }
}
