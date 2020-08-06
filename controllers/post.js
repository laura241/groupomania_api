const db = require("../config/db");
const Post = db.posts;
const {
  Op
} = require('sequelize');

exports.newPost = async (req, res) => {
  const newPost = await Post.create({
    post: req.body.post,
    userId: req.body.userId,
  })
  await newPost.reload({
    include: [{
      model: db.users,
      required: true,
    }]
  })
  return res.send(newPost)
};

exports.getAllPosts = (req, res) => {
  Post.findAll({
      include: [{
        model: db.users,
        required: true,
      }, {
        model: db.comments,
        required: false,
      }],
    })
    .then(posts => {
      console.log(posts)
      return res.status(200).send(posts)
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });

};

exports.getLastPosts = (req, res) => {
  Post.findAll({
      include: [{
        model: db.users,
        required: true,
      }, {
        model: db.comments,
        required: true,
      }],
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then(posts => {
      console.log(posts)
      return res.status(200).send(posts)
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });



}