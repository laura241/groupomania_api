const db = require("../config/db");
const User = db.users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const userForm = req.body;
  bcrypt
    .hash(userForm.gpPassword, 10)
    .then((hash) => {
      User.create({
        lastName: userForm.lastName,
        firstName: userForm.firstName,
        gpService: userForm.gpService,
        email: userForm.email,
        gpLogin: userForm.gpLogin,
        gpPassword: hash,
      });
    })
    .then((user) => {
      res.status(201).json({
        message: "User created !",
      });
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};

exports.login = (req, res) => {
  const gpLogin = req.body.gpLogin;
  const email = req.body.gpEmail;
  if (gpLogin && email) {
    db.query(
      "SELECT * FROM users WHERE gpLogin = ? AND gpPassword = ?",
      [gpLogin, gpPassword],
      function (error, results, fields) {
        if (results.length > 0) {
          bcrypt
            .compare(req.body.gpPassword, users.gpPassword)
            .then((valid) => {
              if (!valid) {
                return res.status(401).json({
                  error: "Mot de passe incorrect !",
                });
              }
              res.status(200).json({
                userId: userId,
                token: jwt.sign(
                  {
                    userId: userId,
                  },
                  "RANDOM_TOKEN_SECRET",
                  { expiresIn: "24h" }
                ),
              });
            })
            .catch((error) =>
              res.status(500).json({
                error,
              })
            );
          response.redirect("http://localhost:8080/Home");
        } else {
          response.send("Incorrect Login and/or Password!");
        }
      }.catch((error) => res.status(500).json({ error }))
    );
  }
};

exports.getUserAccount = (req, res) => {};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};
