import type { Role } from "@skillseta/types";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      sub: string;
      role: Role;
    };
  }
}
