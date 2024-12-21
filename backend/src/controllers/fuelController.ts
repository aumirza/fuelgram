import { NextFunction, Request, Response } from "express";
import { FuelService } from "../services/fuelService";

class FuelController {
  async getFuels(req: Request, res: Response, next: NextFunction) {
    try {
      const fuels = await FuelService.getFuels();
      res.status(200).json({
        success: true,
        data: {
          fuels,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new FuelController();
