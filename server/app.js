const express = require('express');

const movieRouter = require('./routes/movie');
const securityRouter = require('./routes/user');

//Middlewares
const securityMiddlewares = require('./middlewares/security')

const app = express();


app.use('/movies', movieRouter);
app.use('/', securityRouter);

app.listen(3000, () => console.log('Listening in port 3000'));