import { User } from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "./utils/AppError.js";
export const loginService = async ({ email, password, }) => {
    const user = await User.findOne({ email });
    if (!user)
        throw new AppError("User not exists", 400);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        throw new AppError("Invalid Password", 400);
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC, {
        expiresIn: "7d",
    });
    return { token, user };
};
export const registerService = async ({ name, email, password, }) => {
    let user = await User.findOne({ email });
    if (user)
        throw new AppError("User already exists", 400);
    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
        name,
        email,
        password: hashPassword,
    });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC, {
        expiresIn: "7d",
    });
    return { token, user };
};
//# sourceMappingURL=service.js.map