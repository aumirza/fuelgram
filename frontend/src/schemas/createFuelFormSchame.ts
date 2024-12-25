import { z } from "zod";
const mediaSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  type: z.string().min(3).max(255),
  file: z.instanceof(File),
});

export const createFuelFormSchema: z.ZodSchema = z.object({
  type: z.string().min(3).max(255),
  content: z.string().min(3).max(255),
  images: z.array(mediaSchema),
});
