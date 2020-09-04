const db = require("../config/db");
const Comment = db.comments;
const Post = db.posts;

exports.newComment = async (req, res) => {
    const postId = req.body.postId
    await Comment.create({
        postId,
        comment: req.body.comment,
        userId: req.body.userId
    })
    const post = await Post.findOne({
        where: {
            postId,
        },
        include: [{
            model: db.users,
            required: false,
        }, {
            model: db.comments,
            required: false,
            include: [{
                model: db.users,
                required: false,
            }]
        }],
    })
    return res.send(post)
};


exports.getCommentsByUser = (req, res) => {
    Comment.findAll({
            where: {
                userId: req.params.id
            },
        })
        .then((comments) => {
            console.log(comments);
            return res.status(200).send(comments);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Some error occured",
            });
        });
};



exports.modifyComment = (req, res) => {
    Comment.update({
            isPublic: 'true'
        }, {
            where: {
                commentId: req.params.id
            }
        })
        .then(count => {
            console.log('Rows updated ' + count);
        })

};

exports.deleteComment = async (req, res) => {
    const deleteComment = await Comment.destroy({
        where: {
            commentId: req.params.id
        }
    })
    return res.status(500).json({
        message: 'the comment has been deleted'
    });
};

exports.getAllAdminComments = (req, res) => {
    Comment.findAll({
            where: {
                isPublic: 'false',
            },
            include: [{
                    model: db.users,
                    required: false,
                },
                {
                    model: db.posts,
                    required: false

                }
            ],
        })
        .then((comments) => {
            console.log(comments);
            return res.status(200).send(comments);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Some error occured",
            });
        });
};