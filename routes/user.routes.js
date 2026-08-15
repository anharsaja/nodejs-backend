import express, { Router } from "express";
import auth from "../middlewares/auth.js";
import { getUsers, createUsers } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", getUsers);
router.post("/", auth, createUsers);

export default router;