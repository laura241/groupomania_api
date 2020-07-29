const db = require("../config/db");
const Post = db.posts;

exports.newPost = (req, res) => {
  Post.create({
      post: req.body.post,
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

exports.getAllPosts = (req, res) => {
  Post.findAll({
      include: [{
        model: db.users,
        required: true,
      }],

    })
    .then(posts => {
      return res.status(200).send(posts)
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};