import express from "express";
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
  patchUser,
} from "../controllers/userController.js";
import mwTest from "../middlewares/mwCreate.js";

const userRouter = express.Router();

//CREATE
/**
 * Here we pass our middleware function, so it only will be
 * executed when the server gets a http request for this endpoint
 * or route, will be executed before the 'createUser' function.
 *
 * That's how a middleware works, will be executed before an another
 * function.
 */
userRouter.post("/new", mwTest, (req, res) => {
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
