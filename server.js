import express from "express";
import { connectDB } from "./DB/db.js";
import { itemRoute } from "./routes/user.route.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from 'fs';
import path from 'path';

const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve('./swagger-output.json'), 'utf-8'));

console.log(swaggerDocument); // Log the loaded Swagger document



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", itemRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});


try {
  connectDB();
  app.listen(3000, () => {
    console.log("App listening on port 3000!");
  });
} catch (error) {
  console.log("Error starting the server:", error);
}
