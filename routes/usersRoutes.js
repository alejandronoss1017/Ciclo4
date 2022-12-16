import express from "express";
import {
  createUser,
  deleteUser,
  getAll,
  getAllByCareer,
  readUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/new", (req, res) => {
  createUser(req, res);
});

userRouter.get("/all", (req, res, next) => {
  getAll(req, res, next);
});

userRouter.get("/career/:name", (req, res) => {
  getAllByCareer(req, res);
});

userRouter.get("/:id", (req, res, next) => {
  readUser(req, res, next);
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
