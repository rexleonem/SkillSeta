import "dotenv/config";

import { createAiServer } from "./app.js";
import { env } from "./utils/env.js";

const app = createAiServer();

app.listen(env.AI_SERVICE_PORT, () => {
  console.log(`[ai-service] listening on :${env.AI_SERVICE_PORT}`);
});
