const db = require("../config/db");
const Message = db.messages;

exports.newPost = (req, res) => {
    const messageObject = req.body
    console.log(messageObject)
    Message.create({
            message: messageObject.newMessage,
            userId: messageObject.userId
        })
        .then(() => {
            res.status(201).send({
                message: Message,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the message"
            })
        });
}