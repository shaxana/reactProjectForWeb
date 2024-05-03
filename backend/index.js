const express = require("express");
require("dotenv").config();
require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

const router = require("./router/productRouter");
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
