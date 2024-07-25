import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.post("/signup", createUser);
router.get("/user", getUsers);
router.get("/user/id", getUserById);
router.put("/user", updateUser);
router.delete("/user", deleteUser);

export { router };
