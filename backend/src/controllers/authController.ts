import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { ZodError } from "zod";

class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await UserService.findUserByEmail(email);

      if (!user) {
        res.status(404).json({ message: "No user found with this email" });
        return;
      }

      if (UserService.checkPassword.bind(user, password)) {
        res
          .status(401)
          .json({ message: "Invalid password or email combination." });
        return;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { name, username, email, password } = req.body;
      console.log(req.body);
      const user = await UserService.createUser({
        name,
        username,
        email,
        password,
      });
      res.status(201).json(user);
      return;
    } catch (error) {
      if (error instanceof ZodError) {
        // console.error(error.errors);
        res.status(500).json({ message: error.errors });
        return;
      }
      // console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new AuthController();
