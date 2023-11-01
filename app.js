require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { errors } = require("celebrate");
const router = require("./routes/index");
const cors = require('cors');
const { handleError } = require("./middlewares/errorsHandler");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/bitfilmsdb")
  .then(() => {
    console.log("Бд подключена");
  })
  .catch(() => {
    console.log("Что-то пошло не так");
  });

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://api.movies-explorer-api.nomoredomainsrocks.ru",
    "http://api.movies-explorer-api.nomoredomainsrocks.ru",
  ],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
