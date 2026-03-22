import mongoose, { Schema } from "mongoose";
import type { IUser } from "./interface.js";

const schema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    playlist: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

//If you send the user doc as a json as a response the password field will be removed from it best industrial practise

schema.set("toJSON", {
  transform: (_doc, ret: any) => {
    delete ret.password;
    return ret;
  },
});

export const User = mongoose.model<IUser>("User", schema);
