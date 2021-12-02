const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const { campaign } = require("./api");
const ErrorHandler = require("./module/errorHandler");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", campaign);

app.use(ErrorHandler);

module.exports = { app };
