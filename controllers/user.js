const db = require("../config/db");
const User = db.users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const userForm = req.body;
  User.findOne({
      where: {
        email: userForm.email
      }
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
          .then((user) => {
            res.status(201).send({
              message: "User created!",
            });
          })
          .catch((err) => {
            res.status(500).send("Error ->" + err);
          });
      }

    })
    .catch((err) => {
      res.status(500).send("Error ->" + err)
    })
};

exports.login = (req, res) => {
  const response = req.body;
  return User.findOne({
      WHERE: {
        email: response.email,
      },
    })
    .then(function (result) {
      if (!result) {
        return res.status(401).json({
          error: "Utilisateur non trouvé!",
        });
      } else {
        bcrypt.compare(response.gpPassword, result.gpPassword)
          .then((valid) => {
            if (!valid) {
              return res.status(401).json({
                error: "Mot de passe incorrect!",
              });
            } else {
              res.status(200).json({
                token: jwt.sign({}, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "2h",
                }),
              });
            }
          })
          .catch((error) =>
            res.status(500).json({
              error,
            })
          );
      }
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    )
};


exports.getUserAccount = (req, res) => {
  User.findOne({
      userId: req.params.userId
    })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(error => {
      res.status(404).send({
        message: 'User not found'
      });
    });
};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};