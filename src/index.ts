import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./route.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./libs/swagger.js";

dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "Spotify",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

const app = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());

app.use(express.json());

app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send(`User service is running`);
});

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
