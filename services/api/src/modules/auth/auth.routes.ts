import { Router } from "express";
import { login, refresh, signup } from "./auth.controller.js";

export const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/refresh", refresh);
