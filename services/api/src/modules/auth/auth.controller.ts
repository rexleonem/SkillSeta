import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { prisma } from "../../lib/prisma.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../../lib/jwt.js";
import { HttpError } from "../../utils/http.js";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export async function signup(req: Request, res: Response) {
  const { email, password, name } = signupSchema.parse(req.body);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new HttpError(409, "User already exists");

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash: await bcrypt.hash(password, 12),
      role: "user"
    }
  });

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user.id, role: user.role });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  res.status(201).json({
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
    accessToken
  });
}

export async function login(req: Request, res: Response) {
  const { email, password } = loginSchema.parse(req.body);
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new HttpError(401, "Invalid credentials");

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new HttpError(401, "Invalid credentials");

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user.id, role: user.role });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  res.json({
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
    accessToken
  });
}

export async function refresh(req: Request, res: Response) {
  const token = req.headers.cookie?.match(/refresh_token=([^;]+)/)?.[1];
  if (!token) throw new HttpError(401, "Missing refresh token");

  let payload: { sub: string; role: "admin" | "user" };
  try {
    payload = verifyRefreshToken<{ sub: string; role: "admin" | "user" }>(token);
  } catch {
    throw new HttpError(401, "Invalid refresh token");
  }
  const accessToken = signAccessToken({ sub: payload.sub, role: payload.role });
  const refreshToken = signRefreshToken({ sub: payload.sub, role: payload.role });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  res.json({ accessToken });
}
