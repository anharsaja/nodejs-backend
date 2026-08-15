import express, { Router } from "express";
import auth from "../middlewares/auth.js";
import { getUser, createUser, getUserById, updateUser } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", auth, createUser);
router.put("/:id", auth, updateUser);

export default router;