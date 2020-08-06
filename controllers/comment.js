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