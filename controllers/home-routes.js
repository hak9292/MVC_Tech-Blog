const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// const Homepage = require('../models/Homepage')

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.FindAll({
            include: [User],
        });
        const posts = allPosts.map((post) => post.get({
            plain: true
        }));
        res.render('all-posts', {
            posts
        });
    } catch (err) {
        res.json(err);
    }
})



module.exports = router;