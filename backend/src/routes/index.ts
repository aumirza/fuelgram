import express from "express";
import indexController from "../controllers/indexController";
import authRouter from "./authRouter";
import fuelRouter from "./fuelRouter";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/", fuelRouter);
router.get("/", indexController.home);

export default router;
