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
            required: true,
        }, {
            model: db.comments,
            required: false,
        }],
    })
    return res.send(post)
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
}