import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    age: { type: Number, require: true },
    career: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timeStamps: true }
);

export default mongoose.model("users", userSchema);
