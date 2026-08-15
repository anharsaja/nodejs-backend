import express, { Router } from "express";
import auth from "../middlewares/auth.js";
import { getUser, createUser } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", getUser);
router.post("/", auth, createUser);

export default router;