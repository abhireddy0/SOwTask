import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", authMiddleware, getProducts);
router.put("/:id", authMiddleware, updateProduct);

export default router;
