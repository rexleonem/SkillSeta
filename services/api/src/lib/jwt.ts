import jwt from "jsonwebtoken";
import { parseEnv } from "@skillseta/config";

const env = parseEnv();

export function signAccessToken(payload: object) {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, { expiresIn: env.JWT_ACCESS_EXPIRES_IN });
}

export function signRefreshToken(payload: object) {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: env.JWT_REFRESH_EXPIRES_IN });
}

export function verifyAccessToken<T>(token: string) {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as T;
}

export function verifyRefreshToken<T>(token: string) {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as T;
}
