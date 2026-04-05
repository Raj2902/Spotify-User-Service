import express from "express";
import {
  addToPlaylist,
  loginUser,
  myProfile,
  registerUser,
} from "./controller.js";
import { isAuth } from "./middleware/authentication.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isAuth, myProfile);
router.post("/song/:id", isAuth, addToPlaylist);

export default router;
