const express = require('express');
const auth = require('../lib/auth');
const User = require('../models/user');

const router = express.Router();

router.post('/login', (req, res) => {
    User.login(req.body.email, req.body.password)
        .then((user) => {
            const token = auth.createToken({
                firstName : user.firstName
            });
            res.status(201).send(token);
        }, (err) => {
            console.error(err);
            res.status(400).send(err);
            
        })
});



module.exports = router;