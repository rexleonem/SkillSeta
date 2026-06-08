import { Router } from "express";

import { routerAi } from "./router.route.js";

export const router = Router();

router.use("/router", routerAi);
