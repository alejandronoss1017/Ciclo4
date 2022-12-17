/**
 * We import the module from the express framework to implements their
 * API
 */
import express from "express";
import landingPageRouter from "./routes/landingPage.js";
import userRouter from "./routes/userRoutes.js";

// We import the API for works with MongoDB
import mongoose from "mongoose";
import sayHello from "./middlewares/testing.js";

// Creates an express application
const app = express();

// Crete a const that saves the mongoDB URI
const MONGO_URI =
  "mongodb+srv://testingAtlas:testingAtlas@cluster0.9ew3xxs.mongodb.net/testingAtlas?retryWrites=true&w=majority";

/**
 * This will assign an automatic port by the OS we use it in production if we
 * don't want to use the port 80 for web applications, otherwise if the OS cannot
 * give us a port it will use the standard port for node apps that is the port
 * 3000
 */
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection to the Data Base completed.");
  }
});

app.listen(PORT, () => {
  console.log(`The server is running successfully in the port ${PORT}`);
});

/**
 *  is a built-in middleware function in Express.
 *  It parses incoming requests with JSON payloads and is based on body-parser.
 */
app.use(express.json());

/**
 * A middleware will executed before any other function in the program
 * when we use the built in method '.use()', in here we don't specify a
 * route so it will be execute for all http request.
 *
 * If wanna try it just run the server and send a http request, it will print
 * 'hello world' in the terminal, this is a global middleware, that's the reason
 * for it will be executed every http request.
 *
 * There's also a specific middleware for some endpoints or routes, check the
 * middleware in the 'create user' endpoint.
 */
app.use(sayHello);
/**
 * Use the express.Router class to create modular, mountable route handlers.
 * A Router instance is a complete middleware and routing system;
 * for this reason, it is often referred to as a “mini-app”.
 *
 * Here we load the router module in the app
 */
app.use("/user", userRouter);
app.use("/", landingPageRouter);
