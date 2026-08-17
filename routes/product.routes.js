import express, { Router } from "express";
import { getProducts, createProducts, getProductById, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", auth, getProductById);
router.post("/", auth, createProducts);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;