import { Router } from "express";
import fuelController from "../controllers/fuelController";

const fuelRouter = Router();

fuelRouter.get("/fuels", fuelController.getFuels);

export default fuelRouter;
