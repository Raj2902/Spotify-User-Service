import type { Request, Response } from "express";
import { asyncHandler } from "./middleware/asyncHandler.js";
import { loginService, registerService } from "./service.js";
import type { AuthenticatedRequest } from "./interface.js";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const { token, user } = await registerService({ name, email, password });
    res.status(201).json({ message: "User Registered", user, token });
  },
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { token, user } = await loginService({ email, password });
  res.status(201).json({ message: "Logged In", user, token });
});

export const myProfile = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user;

    return res.status(200).json(user);
  },
);
