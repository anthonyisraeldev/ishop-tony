import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "../middleware/errorMiddleware.js";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerOpts from "./swaggerConfig.js";
import swaggerJsdoc from "swagger-jsdoc";
import routerApp from "../routes/index.js";
import cors from "cors";
dotenv.config();

//Express
const app = express();

//Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
//body-parser
app.use(express.json());

//Swagger
const swaggerDocs = swaggerJsdoc(swaggerOpts);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { explorer: true })
);

//Routers
routerApp(app);

//Handlers
app.use(notFound);
app.use(errorHandler);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

export default app;
