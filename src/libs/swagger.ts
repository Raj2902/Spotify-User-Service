import "dotenv/config";
import { registerInputSwaggerSchema } from "./swagger-schemas/register.swagger.schema.js";
import { userBaseSwaggerSchema } from "./swagger-schemas/user.swagger.schema.js";
import {
  loginInputSwaggerSchema,
  loginOuputSwaggerSchema,
} from "./swagger-schemas/login.swagger.schema.js";
import { profileResponseSwaggerSchema } from "./swagger-schemas/profile.swagger.schema.js";
import { playlistToggleResponse } from "./swagger-schemas/playlist.swagger.schema.js";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Music Playing Platform APIs",
      version: "1.0.0",
      description: "List of all the music playing platform APIs",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        LoginInput: loginInputSwaggerSchema,
        RegisterInput: registerInputSwaggerSchema,
        LoginOutput: loginOuputSwaggerSchema,
        User: userBaseSwaggerSchema,
        Profile: profileResponseSwaggerSchema,
        playlistToggleResponse: playlistToggleResponse,
      },
    },
  },
  apis: ["./**/*.ts"], // Path to the API routes folders
};
