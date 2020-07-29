const db = require("../config/db");
const Comment = db.comments;

exports.newComment = (req, res) => {
    Comment.create({
            postId: req.body.postId,
            comment: req.body.comment,
            userId: req.body.userId
        })
        .then(() => {
            return res.status(201).send({
                message: "The comment was sent successfully",
            });
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Some error occured while creating the message",
            });
        });
};