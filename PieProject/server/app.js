require('dotenv').config()

const express = require('express');  //exress allows us to write HTTPS
const app = express();

const pies = require('./controllers/piecontroller');

const sequelize = require('./db');
sequelize.sync(); // to drop tables ---> {force: true} inside sync()
app.use(express.json()); // need for POST request and PUT request

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index')); // creating an endpoint and serving up a response

app.use('/pies', pies);
