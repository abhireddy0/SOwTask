import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import translationRoutes from "./routes/TranslationRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/translations", translationRoutes);
app.use("/api/products", productRoutes);

export default app;
