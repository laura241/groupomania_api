const db = require("../config/db");
const Message = db.messages;

exports.newPost = (req, res) => {
  Message.create({
      message: req.body.message,
      userId: req.body.userId,
    })
    .then(() => {
      return res.status(201).send({
        message: "The post was sent successfully",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured while creating the message",
      });
    });
};

exports.getAllMessages = (req, res) => {
  Message.findAll()
    .then(messages => {
      return res.status(200).send(messages)
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};