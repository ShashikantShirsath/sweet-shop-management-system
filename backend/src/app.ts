import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";
import sweetsRoutes from "./modules/sweets/sweets.routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);

export default app;