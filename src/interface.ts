import {
  Document,
  Types,
  type StringExpressionOperatorReturningBoolean,
} from "mongoose";
import type { Request } from "express";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  playlist: string[];
}

export interface registerParams {
  name: string;
  email: string;
  password: string;
}

export interface loginParams {
  email: string;
  password: string;
}

export interface addToPlayListParams {
  userId: Types.ObjectId;
  songId: string;
}

export interface AuthenticatedRequest extends Request {
  user?: IUser | null;
}
