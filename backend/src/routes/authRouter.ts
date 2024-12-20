import { Router } from "express";
import authController from "../controllers/authController";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/refresh-token", authController.refreshToken);

router.get("/logout", verifyToken, authController.logout);

export default router;
