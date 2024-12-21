import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/userService";
import { publicUserSchema } from "../schemas";
import { AuthService } from "../services/authService";
class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password, username } = req.body;
    try {
      const user = await UserService.findByUsernameOrEmail({ email, username });

      if (!user) {
        res.status(404).json({
          message: "No user found with this" + email ? "email" : "username",
        });
        return;
      }

      if (!(await UserService.checkPassword(user, password))) {
        res
          .status(401)
          .json({ message: "Invalid password or email combination." });
        return;
      }

      const tokens = await AuthService.generateTokens(
        publicUserSchema.parse(user)
      );

      res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: {
          user: publicUserSchema.parse(user),
          ...tokens,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, username, email, password } = req.body;
      await UserService.validateUser({ name, username, email, password });
      const user = await UserService.createUser({
        name,
        username,
        email,
        password,
      });
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: publicUserSchema.parse(user),
      });
      return;
    } catch (error: any) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        res.status(400).json({ message: "Refresh token is required" });
        return;
      }

      const decoded = await AuthService.verifyRefreshToken(refreshToken);
      const user = publicUserSchema.parse(decoded);
      const tokens = await AuthService.generateTokens(user);

      res.status(200).json({
        success: true,
        message: "Token generated",
        data: {
          user,
          ...tokens,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      // await AuthService.revokeToken(refreshToken);

      res.status(200).json({
        success: true,
        message: "Token revoked",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
