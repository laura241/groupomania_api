const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');
const db = require("../config/db");
const User = db.users;

verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
        req.userId = decoded.id;
        next();
    })
}

const authJwt = {
    verifyToken: verifyToken
}

module.exports = authJwt;