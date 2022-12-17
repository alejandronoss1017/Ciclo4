import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    age: { type: Number, require: true, min: 16 },
    career: {
      type: String,
      require: true,
      enum: [
        "Computer Science",
        "Bussines Administrator",
        "Medicine",
        "Law",
        "Art",
      ],
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: { type: String, require: true, minlenght: 4, maxlenght: 40 },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
