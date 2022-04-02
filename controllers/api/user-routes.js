const router = require('express').Router();
const { User } = require('../../models');

// signing up route
router.post('/', async (req, res) => {
    try {
        const signUp = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.userId = signUp.id;
            req.session.username = signUp.username;
            req.session.signedIn = true;
            res.json(signUp);
        })
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;