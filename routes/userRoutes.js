import express from "express";
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

//CREATE
userRouter.post("/", (req, res) => {
  createUser(req, res);
});

//READ
userRouter.get("/", (req, res) => {
  readUser(req, res);
});

//UPDATE
userRouter.put("/", (req, res) => {
  updateUser(req, res);
});

//DELETE
userRouter.delete("/", (req, res) => {
  deleteUser(req, res);
});

export default userRouter;
