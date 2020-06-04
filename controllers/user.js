const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const User = require('../models/sequelize');

exports.signup = (req, res) => {
    User.create({
            last_name: req.body.last_name,
            first_name: req.body.first_name,
            gp_service: req.body.gp_service,
            email: req.body.email,
            gp_login: req.body.gp_login,
            gp_password: req.body.gp_password
        })
        .then(user => res.json(user))
};

exports.login = (req, res) => {};

exports.getUserAccount = (req, res) => {};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};