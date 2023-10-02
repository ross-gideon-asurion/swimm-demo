const express = require("express");
const appRouter = require("./routes/router");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.use("/", appRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
