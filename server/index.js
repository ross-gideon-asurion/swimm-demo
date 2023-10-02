const express = require("express");
const openaiRouter = require("./routes/router");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.use("/", openaiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
