import express from "express";
import { addToPlaylist, loginUser, myProfile, registerUser, } from "./controller.js";
import { isAuth } from "./middleware/authentication.js";
const router = express.Router();
/**
 * @openapi
 * /api/v1/user/register:
 *   post:
 *     tags:
 *       - User
 *     description: Create a new user.
 *     requestBody:
 *       description: Data needed to create a new user.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RegisterInput"
 *     responses:
 *       201:
 *         description: Returns the new user created with a success message of user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginOutput'
 */
router.post("/register", registerUser);
/**
 * @openapi
 * /api/v1/user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login a user.
 *     requestBody:
 *       description: Data needed to login a user.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginInput"
 *     responses:
 *       201:
 *         description: Returns the new user created with a success message of user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginOutput'
 */
router.post("/login", loginUser);
/**
 * @openapi
 * /api/v1/user/me:
 *   get:
 *     tags:
 *       - User
 *     description: Get a user profile.
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT Token (eg. <your-token>)
 *     responses:
 *       201:
 *         description: Returns the user profile with a success message of user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 */
router.get("/me", isAuth, myProfile);
/**
 * @openapi
 * /api/v1/user/song/{id}:
 *   post:
 *     tags:
 *       - User
 *     description: Add or remove song to/from user playlist.
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT Token (eg. <your-token>)
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Song id
 *     responses:
 *       201:
 *         description: Adds or removes the requested song to/from the user playlist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/playlistToggleResponse'
 */
router.post("/song/:id", isAuth, addToPlaylist);
export default router;
//# sourceMappingURL=route.js.map