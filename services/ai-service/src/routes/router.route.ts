import { Router } from "express";
import { z } from "zod";

import { routeRequest } from "../router/ai-router.js";

export const routerAi = Router();

const routerSchema = z.object({
  message: z.string().min(1),
  context: z.record(z.string(), z.unknown()).optional()
});

routerAi.post("/", async (req, res, next) => {
  try {
    const result = await routeRequest(routerSchema.parse(req.body));
    res.json(result);
  } catch (error) {
    next(error);
  }
});
