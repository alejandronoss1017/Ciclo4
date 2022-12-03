import express from "express";
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
  patchUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

//CREATE
userRouter.post("/new", (req, res) => {
  createUser(req, res);
});

//READ
userRouter.get("/:name/:lastName", (req, res) => {
  readUser(req, res);
});

//UPDATE
//We use PUT to modify all the properties of a document
userRouter.put("/update/:id", (req, res) => {
  updateUser(req, res);
});

//PATCH
//We use PATCH to modify some of the properties of a document
userRouter.patch("/update/:id", (req, res) => {
  patchUser(req, res);
});

//DELETE
userRouter.delete("/delete/:id", (req, res) => {
  deleteUser(req, res);
});

export default userRouter;
