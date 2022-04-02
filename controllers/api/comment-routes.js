const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const commenting = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(commenting);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;