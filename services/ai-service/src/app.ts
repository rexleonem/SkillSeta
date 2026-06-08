import express from "express";

import { router } from "./routes/index.js";
import { errorHandler } from "./middleware/error-handler.js";

export function createAiServer() {
  const app = express();

  app.use(express.json({ limit: "2mb" }));
  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "ai-service" });
  });
  app.use("/api/v1", router);
  app.use(errorHandler);

  return app;
}
