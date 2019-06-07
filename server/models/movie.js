const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    title: String,
    createdAt: Date,
    year: {
        type: Number,
        required: true,
        min: 1900
    },
    category: {
        type: String,
        enum: ['Horror', 'Drama', 'SF', 'Comedy'],
        required: true
    }
});

MoviesSchema.methods.onScreen = function () {
    console.log(Date.now() > new Date(`${this.year}-01-01`));
}

module.exports = mongoose.model('Movie', MoviesSchema);