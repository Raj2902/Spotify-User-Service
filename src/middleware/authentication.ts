import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import { User } from "../model.js";
import type { AuthenticatedRequest } from "../interface.js";
import { asyncHandler } from "./asyncHandler.js";

export const isAuth = asyncHandler(
  async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const token = req.headers.token as string;
    if (!token) {
      throw new AppError("Please Login", 403);
    }

    const decodedValue = jwt.verify(
      token,
      process.env.JWT_SEC as string,
    ) as JwtPayload;

    if (!decodedValue || !decodedValue._id) {
      throw new AppError("Invavlid token", 403);
    }

    const userId = decodedValue._id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      throw new AppError("User not found", 403);
    }
    req.user = user;
    next();
  },
);
