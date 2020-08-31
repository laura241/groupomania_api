const db = require("../config/db");
const Post = db.posts;
const {
  Op
} = require("sequelize");

exports.newPost = async (req, res) => {
  const newPost = await Post.create({
    post: req.body.post,
    title: req.body.title,
    link: req.body.link,
    userId: req.body.userId,
  });
  await newPost.reload({
    include: [{
      model: db.users,
      required: true,
    }, ],
  });
  return res.status(500).send(newPost);
};

exports.getAllAdminPosts = (req, res) => {
  Post.findAll({
      where: {
        isPublic: 'false',
      },
      include: [{
        model: db.users,
        required: true,
      }, {
        model: db.comments,
        required: false,
        where: {
          isPublic: 'false'
        }
      }],
    })
    .then((posts) => {
      console.log(posts);
      return res.status(200).send(posts);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};

exports.getAllPosts = (req, res) => {
  Post.findAll({
      where: {
        isPublic: 'true',
      },
      include: [{
          model: db.users,
          required: true,
        },
        {
          model: db.comments,
          required: false,
          include: [{
            model: db.users
          }]
        },
      ],
    })
    .then((posts) => {
      console.log(posts);
      return res.status(200).send(posts);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};

exports.getLastPosts = (req, res) => {
  Post.findAll({
      where: {
        isPublic: 'true'
      },
      include: [{
          model: db.users,
          required: false,
        },
        {
          model: db.comments,
          required: false,
        },
      ],
      order: [
        ["createdAt", "DESC"]
      ],
    })
    .then((post) => {
      console.log(post);
      return res.status(200).send(post);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};


exports.modifyPost = (req, res) => {
  Post.update({
      isPublic: 'true'
    }, {
      where: {
        postId: req.params.id
      }
    })
    .then(count => {
      console.log('Rows updated ' + count);
    })

};




exports.deletePost = async (req, res) => {
  const deletePost = await Post.destroy({
    where: {
      postId: req.params.id
    }
  })
  return res.status(500).json({
    message: 'the post has been deleted'
  });
}