import { User } from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "./utils/AppError.js";
import type {
  addToPlayListParams,
  IUser,
  loginParams,
  registerParams,
} from "./interface.js";

export const loginService = async ({
  email,
  password,
}: loginParams): Promise<{ token: string; user: IUser }> => {
  const user = await User.findOne({ email });

  if (!user) throw new AppError("User not exists", 400);

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new AppError("Invalid Password", 400);

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC as string, {
    expiresIn: "7d",
  });

  return { token, user };
};

export const registerService = async ({
  name,
  email,
  password,
}: registerParams): Promise<{ token: string; user: IUser }> => {
  let user = await User.findOne({ email });

  if (user) throw new AppError("User already exists", 400);

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC as string, {
    expiresIn: "7d",
  });

  return { token, user };
};

export const addToPlayListService = async ({
  userId,
  songId,
}: addToPlayListParams) => {
  const user = await User.findById(userId);

  if (!user) throw new AppError("No user with this id", 404);

  if (user.playlist.includes(songId)) {
    const index = user.playlist.indexOf(songId);

    user.playlist.splice(index, 1);

    await user.save();

    return { removed: true };
  }
  user.playlist.push(songId);

  await user.save();

  return { removed: false };
};
