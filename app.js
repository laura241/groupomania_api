const express = require("express");

//Initialisation of the app
const app = express();

app.use((req, res) => {
    res.json({
        message: 'Votre requête a bien été reçue'
    })
});

module.exports = app;