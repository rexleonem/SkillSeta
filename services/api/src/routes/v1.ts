import { Router } from "express";

import { authRouter } from "../modules/auth/auth.routes.js";
import { usersRouter } from "../modules/users/users.routes.js";
import { skillsRouter } from "../modules/skills/skills.routes.js";
import { learningRouter } from "../modules/learning/learning.routes.js";
import { progressRouter } from "../modules/progress/progress.routes.js";
import { assessmentsRouter } from "../modules/assessments/assessments.routes.js";
import { projectsRouter } from "../modules/projects/projects.routes.js";
import { analyticsRouter } from "../modules/analytics/analytics.routes.js";
import { aiGatewayRouter } from "../modules/ai-gateway/ai-gateway.routes.js";

export const apiV1Router = Router();

apiV1Router.use("/auth", authRouter);
apiV1Router.use("/users", usersRouter);
apiV1Router.use("/skills", skillsRouter);
apiV1Router.use("/learning", learningRouter);
apiV1Router.use("/progress", progressRouter);
apiV1Router.use("/assessments", assessmentsRouter);
apiV1Router.use("/projects", projectsRouter);
apiV1Router.use("/analytics", analyticsRouter);
apiV1Router.use("/ai", aiGatewayRouter);
