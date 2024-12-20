import { IUser } from "./user";

export {};

declare global {
  namespace Express {
    // extends
    interface Request {
      user?: IUser;
    }
  }
}
