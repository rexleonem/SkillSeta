import type { RequestHandler } from "express";
import { RateLimiterMemory } from "rate-limiter-flexible";

const limiter = new RateLimiterMemory({
  points: 100,
  duration: 60
});

export const rateLimit: RequestHandler = async (req, res, next) => {
  try {
    await limiter.consume(req.ip ?? req.socket.remoteAddress ?? "anonymous");
    next();
  } catch {
    res.status(429).json({ error: "Too many requests" });
  }
};
