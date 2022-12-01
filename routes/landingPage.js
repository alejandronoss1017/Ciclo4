import express from "express";

const landingPageRouter = express.Router();

landingPageRouter.get("/", (req, res) => {
  res.send("Hello World!, from the landing page.");
});

export default landingPageRouter;
