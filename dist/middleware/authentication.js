import jwt, {} from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import { User } from "../model.js";
import { asyncHandler } from "./asyncHandler.js";
export const isAuth = asyncHandler(async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        throw new AppError("Please Login", 403);
    }
    const decodedValue = jwt.verify(token, process.env.JWT_SEC);
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
});
//# sourceMappingURL=authentication.js.map