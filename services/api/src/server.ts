import "dotenv/config";

import { createServer } from "./app.js";
import { parseEnv } from "@skillseta/config";

const env = parseEnv();
const app = createServer();

app.listen(env.API_PORT, () => {
  console.log(`[api] listening on :${env.API_PORT}`);
});
