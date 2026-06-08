import cors from "cors";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";

import { apiV1Router } from "./routes/v1.js";
import { errorHandler } from "./middleware/error-handler.js";
import { requestId } from "./middleware/request-id.js";
import { rateLimit } from "./middleware/rate-limit.js";

export function createServer() {
  const app = express();

  app.set("trust proxy", 1);
  app.use(helmet());
  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({ limit: "2mb" }));
  app.use(requestId);
  app.use(rateLimit);
  app.use(
    pinoHttp({
      transport:
        process.env.NODE_ENV === "production"
          ? undefined
          : { target: "pino-pretty", options: { colorize: true } }
    })
  );

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "api" });
  });

  app.use("/api/v1", apiV1Router);
  app.use(errorHandler);

  return app;
}
