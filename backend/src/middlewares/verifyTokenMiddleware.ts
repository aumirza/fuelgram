import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/authService";
import { UserService } from "../services/userService";
import { IUserPublic } from "../types/user";
import { JsonWebTokenError } from "jsonwebtoken";

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"]?.split(" ")[1];

  //   check token
  if (!token) {
    res.status(401).send({ message: "No token provided" });
    return;
  }

  try {
    // verify token
    const decoded = await AuthService.verifyAccessToken(token);
    const userId = (decoded as IUserPublic).id;
    const user = await UserService.findById(userId);
    // set req.user to the user in the token
    req.user = user;
    next();
  } catch (error: any) {
    if (error instanceof JsonWebTokenError) {
      res.status(401).send({ message: error.message });
      return;
    }
    res.status(401).send({ message: "Unauthorized" });
    return;
  }
}
