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
        email: userForm.email,
        gpPassword: hash,
      });
    })
    .then((user) => {
      res.status(201).send({
        message: 'User created!',
        user: {
          user
        },
      });
    })
    .catch((err) => {
      res.status(500).send("Error ->" + err);
    });
};

exports.login = (req, res) => {
  const response = req.body;
  const email = response.email;
  const gpPassword = response.gpPassword;
  if (email && gpPassword) {
    User.findOne({
        WHERE: {
          email
        }
      })
      .then(User => {
        if (!User) {
          return res.status(401).json({
            error: 'Utilisateur non trouvé!'
          });
        }
        bcrypt.compare(gpPassword, User.gpPassword)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({
                error: 'Mot de passe incorrect!'
              });
            }
            res.status(200).json({
              token: jwt.sign({
                userId: User.userId
              }, 'RANDOM_TOKEN_SECRET', {
                expiresIn: '2h'
              })
            });
          })
          .catch(error => res.status(500).json({
            error
          }));
      })
      .catch(error => res.status(500).json({
        error
      }));
  }
};


exports.getUserAccount = (req, res) => {
  User.findOne({
      WHERE: {
        email
      }
    })
    .then(User => res.status(200).json(User))
    .catch(error => res.status(404).json({
      error
    }))
};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};