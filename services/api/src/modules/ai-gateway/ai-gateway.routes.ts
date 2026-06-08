import { Router } from "express";
import { z } from "zod";

import { env } from "../../config/env.js";

export const aiGatewayRouter = Router();

const payloadSchema = z.object({
  message: z.string().min(1),
  context: z.record(z.string(), z.unknown()).optional()
});

aiGatewayRouter.post("/chat", async (req, res, next) => {
  try {
    const payload = payloadSchema.parse(req.body);
    const response = await fetch(`${env.AI_SERVICE_URL}/router`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`AI service error: ${response.status}`);
    }

    res.json(await response.json());
  } catch (error) {
    next(error);
  }
});
