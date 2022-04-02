const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postings = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        });
        const allPosts = postings.map((post) => post.get({
            plain: true
        }));
        res.render('all-posts', {
            layout: 'dashboard',
            allPosts
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;