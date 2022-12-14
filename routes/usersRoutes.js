import express from "express";
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/new", (req, res) => {
  createUser(req, res);

});

userRouter.get("/:id", (req, res) => {
  readUser(req, res);
});

userRouter.put("/:id", (req, res) => {
  updateUser(req, res);
});

userRouter.patch("/:id", (req, res) => {
  updateUser(req, res);
});

userRouter.delete("/:id", (req, res) => {
  deleteUser(req, res);
});

export default userRouter;
