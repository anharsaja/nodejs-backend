import express, { Router } from "express";
import { getProducts, createProducts, getProductById, updateProduct } from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", auth, createProducts);
router.put("/:id", auth, updateProduct);

export default router;