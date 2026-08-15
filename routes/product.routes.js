import express, { Router } from "express";
import { getProducts, createProducts } from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", auth, createProducts);

export default router;