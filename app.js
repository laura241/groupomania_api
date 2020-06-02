const express = require("express");
const mysql = require("mysql");
const jwt = require("express-jwt");
const cors = require("cors");
const bodyParser = require("body-parser");

//Initialisation of the app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
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

module.exports = app;