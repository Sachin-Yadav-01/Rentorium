import { signUp, demo } from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.post("/signUp", signUp);
router.get("/demo", demo);

export { router };
