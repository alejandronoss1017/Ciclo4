import mongoose from "mongoose";

/**
 * Defines what's gonna be the structure of the document to be
 * stored in the DB
 */
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});

export default mongoose.model("users", userSchema);
