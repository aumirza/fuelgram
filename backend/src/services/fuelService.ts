import { db } from "../db/db";
import { fuels } from "../db/schema";
import { getSelectedFields } from "../utils/getSelectedFields";

export class FuelService {
  static fieldsToSelect: Record<keyof typeof fuels.$inferSelect, boolean> = {
    id: true,
    type: true,
    content: true,
    galleryId: true,
    createdAt: true,
    updatedAt: true,
  };

  static async getFuels() {
    try {
      const fuelsList = db
        .select(getSelectedFields(fuels, this.fieldsToSelect))
        .from(fuels);
      return fuelsList;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
