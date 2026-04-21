import { AppError } from "../utils/AppError.js";
import mongoose from "mongoose";
export const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    if (err instanceof mongoose.Error.ValidationError) {
        return res
            .status(400)
            .json({ messages: Object.values(err.errors).map((e) => e.message) });
    }
    return res
        .status(500)
        .json({ message: err.message || "Internal Server Error" });
};
//# sourceMappingURL=errorHandler.js.map