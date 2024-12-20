import { users } from "../db/schema";
import { DuplicateUserError } from "../errors/duplicateUserError";
import { userInsertSchema } from "../schemas";
import { IUser } from "../types/user";
import { compareHashedPassword, hashPassword } from "../utils/passwordHash";
import { db } from "../db/db";

declare interface usernameOrEmail {
  username?: string;
  email?: string;
}

export class UserService {
  static async validateUser({
    name,
    password,
    username,
    email,
  }: {
    name: string;
    email: string;
    password: string;
    username: string;
  }) {
    const valid = userInsertSchema.safeParse({
      name,
      email,
      password,
      username,
    });

    if (!valid.success) {
      return Promise.reject(valid.error);
    }
  }

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
      const hashedPassword = await hashPassword(password);
      const duplicateEmail = await this.findUserByEmail(email);
      if (duplicateEmail) {
        return Promise.reject(
          new DuplicateUserError("User with this email already exists")
        );
      }
      const duplicateUsername = await this.findByUsernameOrEmail({
        username,
      });
      if (duplicateUsername) {
        return Promise.reject(
          new DuplicateUserError("Username is already taken")
        );
      }
      const user = await db
        .insert(users)
        .values({ name, email, password: hashedPassword, username })
        .returning({
          id: users.id,
          name: users.name,
          email: users.email,
          username: users.username,
        });
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

  static async findByUsernameOrEmail({
    email = "",
    username = "",
  }: usernameOrEmail) {
    try {
      const user = await db.query.users.findFirst({
        where: (user, { or, eq }) =>
          or(eq(user.email, email), eq(user.username, username)),
      });
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async findById(id: number) {
    try {
      const user = await db.query.users.findFirst({
        where: (user, { eq }) => eq(user.id, id),
      });
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async checkPassword(user: IUser, password: string) {
    return await compareHashedPassword(password, user.password);
  }
}
