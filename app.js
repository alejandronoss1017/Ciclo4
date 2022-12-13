import express from "express";
import mongoose from "mongoose";
import landingPageRouter from "./routes/landingPage.js";
import userRouter from "./routes/usersRoutes.js";

/* Constants */
const PORT = process.env.PORT || 3000;

const URI =
  "mongodb+srv://Developer:Developer@cluster0.bm1lny3.mongodb.net/?retryWrites=true&w=majority";

const app = express();

/* Middleware */
app.use(express.json());
app.use("/", landingPageRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running successfully on the port ${PORT}`);
});

mongoose.set("strictQuery", true);

mongoose.connect(URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection to the Data Base completed.");
  }
});
