const express = require("express");
const router = express.Router();
const { getRandomPhoto } = require("../handlers/randomPhoto");

router.get("/healthcheck", async (req, res) => {
  const currentDateTime = new Date();
  res.send("Hello World from the backend! " + currentDateTime);
});

router.post("/random/photos", getRandomPhoto);

module.exports = router;
