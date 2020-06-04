const express = require("express");
const mysql = require("mysql");
const jwt = require("express-jwt");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const path = require("path");

//Initialisation of the app
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 8889,
  password: "root",
  database: "groupomania_bdd",
  multipleStatements: true,
});

mysqlConnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use((req, res) => {
  res.json({
    message: "Votre requête a bien été reçue",
  });
});

app.use("/api/auth", userRoutes);

module.exports = app;
