import { asyncHandler } from "./middleware/asyncHandler.js";
import { loginService, registerService } from "./service.js";
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const { token, user } = await registerService({ name, email, password });
    res.status(201).json({ message: "User Registered", user, token });
});
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const { token, user } = await loginService({ email, password });
    res.status(201).json({ message: "Logged In", user, token });
});
//# sourceMappingURL=controller.js.map