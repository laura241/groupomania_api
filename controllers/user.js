const db = require('../config/db');
const User = db.users;


exports.signup = (req, res) => {
  const userForm = req.body.userForm
  User.create({
      last_name: userForm.last_name,
      first_name: userForm.first_name,
      gp_service: userForm.gp_service,
      email: userForm.email,
      gp_login: userForm.login,
      gp_password: userForm.gp_password
    }).then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error ->" + err)
    })
};




exports.login = (req, res) => {};

exports.getUserAccount = (req, res) => {};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};