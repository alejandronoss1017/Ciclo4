export function createUser(req, res) {
  res.send("Hello World!, you gonna create a user");
  res.status(200);
  console.log("HTTP POST REQUEST FROM: ../user/");
  return;
}
export function readUser(req, res) {
  res.send("Hello World!, you gonna read a user");
  res.status(200);
  console.log("HTTP GET REQUEST FROM: ../user/");
  return;
}
export function updateUser(req, res) {
  res.send("Hello World!, you gonna update a user");
  res.status(200);
  console.log("HTTP PUT REQUEST FROM: ../user/");
  return;
}
export function deleteUser(req, res) {
  res.send("Hello World!, you gonna delete a user");
  res.status(200);
  console.log("HTTP DELETE REQUEST FROM: ../user/");
  return;
}
