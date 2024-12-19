import { users, IUser, userInsertSchema } from "../db/schema";
import { compareHashedPassword, hashPassword } from "../utils/passwordHash";
import { db } from "./db";

export class UserService {
  static async createUser({
    name,
    email,
    password,
    username,
  }: {
    name: string;
    email: string;
    password: string;
    username: string;
  }) {
    try {
      userInsertSchema.parse({ name, email, password, username });
      const hashedPassword = await hashPassword(password);
      const user = await db
        .insert(users)
        .values({ name, email, password: hashedPassword, username });
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async findUserByEmail(email: string) {
    try {
      const user = await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.email, email),
      });
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async findUserById(id: number) {
    try {
      const user = await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.id, id),
      });
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async checkPassword(this: IUser, password: string) {
    return compareHashedPassword(password, this.password);
  }
}
