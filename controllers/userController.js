import { userModel } from "../models/user";
import { bcrypt } from "bcrypt";

export async function createUser(req, res) {
  const user = req.body;
  const { password } = user;
  let document = null;

  user.password = await bcrypt.hash(this.password, 10);

  try {
    document = await userModel.create(user);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(201);
  res.json(document);
}

export async function readUser(req, res) {
  const { id } = req.params;
  let document;
  try {
    document = await userModel.findOne({ id });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }
  res.status(200);
  res.json(document);
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { changes } = req.body;

  let document;

  try {
    document = await userModel.updateOne({ _id: id }, changes, {
      runValidators: true,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }
  res.status(200);
  res.json(document);
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  let document;

  try {
    document = await userModel.findOneAndDelete({
      _id: id,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(document);
}
