const db = require('../config/db');
const User = db.users;
const bcrypt = require('bcrypt');



exports.signup = (req, res) => {
  const userForm = req.body
  bcrypt.hash(userForm.gpPassword,10).then(hash => {
  User.create({
      lastName: userForm.lastName,
      firstName: userForm.firstName,
      gpService: userForm.gpService,
      email: userForm.email,
      gpLogin: userForm.gpLogin,
      gpPassword: hash})
    }).then(user => {
      res.status(201).json({message:'User created !'});
    })
    .catch(err => {
      res.status(500).send("Error ->" + err)
    })
};


exports.login = (req, res) => {
  const gpLogin = req.body.gpLogin;
  const email = req.body.gpEmail;
  if(gpLogin && email) {
    db.query ('SELECT * FROM users WHERE gpLogin = ? AND gpPassword = ?', [gpLogin, gpPassword], function(error, results, fields){
      if (results.length > 0) {
				response.redirect('http://localhost:8080/Home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
    }else{
      response.send('Please enter Login and Password!');
      response.end();
    }
   

};

exports.getUserAccount = (req, res) => {};

exports.modifyUserAccount = (req, res) => {};

exports.deleteUserAccount = (req, res) => {};