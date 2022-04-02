const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const posting = await Post.create({
            ...req.body,
            userId: req.session.userId
        })
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;