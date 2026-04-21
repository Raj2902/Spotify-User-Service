import { asyncHandler } from "./middleware/asyncHandler.js";
import { loginService, registerService, addToPlayListService, } from "./service.js";
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const { token, user } = await registerService({ name, email, password });
    res.status(201).json({ message: "User Registered", user, token });
});
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const { token, user } = await loginService({ email, password });
    res.status(200).json({ message: "Logged In", user, token });
});
export const myProfile = asyncHandler(async (req, res) => {
    const user = req.user;
    return res.status(200).json(user);
});
export const addToPlaylist = asyncHandler(async (req, res) => {
    const { _id: userId } = req.user;
    const { id: songId } = req.params;
    const { removed } = await addToPlayListService({ userId, songId });
    if (removed) {
        res.status(200).json({
            message: "Removed from user playlist",
        });
    }
    else {
        res.status(200).json({
            message: "Added to user playlist",
        });
    }
});
//# sourceMappingURL=controller.js.map