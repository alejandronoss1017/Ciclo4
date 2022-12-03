import userModel from "../models/user.js";

export async function createUser(req, res) {
  const user = req.body;
  let document = null;

  try {
    document = await userModel.create(user);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }
  res.status(201);
  res.json(document);
  console.log("HTTP POST REQUEST FROM: ../user/new");

  return;
}

export async function readUser(req, res) {
  const { name, lastName } = req.params;
  let document = null;
  try {
    document = await userModel.find({
      name,
      lastName,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(document);
  console.log(`HTTP GET REQUEST FROM: ../user/${name}/${lastName}`);
  return;
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { newValues } = req.body;
  let document = null;

  try {
    document = await userModel.updateOne({ _id: id }, newValues);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(document);
  console.log(`HTTP PUT REQUEST FROM: ../user/update/${id}`);
  return;
}

export async function patchUser(req, res) {
  const { id } = req.params;
  const { newValues } = req.body;
  let document = null;

  try {
    document = await userModel.updateOne({ _id: id }, newValues);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(document);
  console.log(`HTTP PUT REQUEST FROM: ../user/patch/${id}`);
  return;
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  let document = null;

  try {
    document = await userModel.findByIdAndDelete(id);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(document);
  console.log("HTTP DELETE REQUEST FROM: ../user/");
  return;
}
