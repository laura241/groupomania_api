const express = require("express");
const mysql = require('mysql');

//Initialisation of the app
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 8889,
    password: "root",
    database: "groupomania_bdd"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


app.use((req, res) => {
    res.json({
        message: 'Votre requête a bien été reçue'
    })
});

module.exports = app;