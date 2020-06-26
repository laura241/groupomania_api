const db = require("../config/db");
const User = db.users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const userForm = req.body;
  return User.findOne({
      where: {
        email: userForm.email,
      },
    })
    .then(() => {
      if (null) {
        return res.status(409).send({
          message: "This email is already in use!",
        });
      } else {
        bcrypt
          .hash(userForm.gpPassword, 10)
          .then((hash) => {
            User.create({
              lastName: userForm.lastName,
              firstName: userForm.firstName,
              email: userForm.email,
              gpPassword: hash,
            });
          })
          .then(() => {
            res.status(201).send({
              user: User,
            });
          })
          .catch((err) => {
            res.status(500).send("Error ->" + err);
          });
      }
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};


exports.login = (req, res) => {
  User.findOne({
      where: {
        email: req.body.email,
      },
    })
    .then(function (User) {
      console.log(User.get({
        plain: true
      }))
      bcrypt
        .compare(req.body.gpPassword, User.gpPassword, function (err, result) {
          if (result == true) {
            res
              .json({
                firstName: User.firstName,
                userId: User.userId,
                token: jwt.sign({
                  userId: User.userId
                }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "2h",
                }),
              })
          } else {
            res.status(401).json({
              error: "Mot de passe incorrect!",
            });
          }
        })
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};

exports.getUserAccount = (req, res) => {
  User.findOne({
      userId: req.body.userId,
    })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(404).send({
        message: "User not found",
      });
    });
};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};