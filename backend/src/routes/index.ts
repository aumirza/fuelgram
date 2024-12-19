import express from "express";
import indexController from "../controllers/indexController";
import authRouter from "./authRouter";

const router = express.Router();

router.use("/auth", authRouter);
router.get("/", indexController.home);

export default router;
