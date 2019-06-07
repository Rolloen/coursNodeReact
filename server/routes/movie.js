const express = require('express');
const bodyparser = require('body-parser');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('slqjflzajrkl');
    
    Movie.find()
        .then( data => res.json(data));
});

router.post('/', (req, res) => {
    const movie = new Movie(req.body);
    movie.save()
        .then((data) => res.status(201).json(data))
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(400).json(error);
            } else {
                res.sendStatus(500);
            }
        })

});


module.exports = router;