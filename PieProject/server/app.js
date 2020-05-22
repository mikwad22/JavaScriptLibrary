//env
require('dotenv').config()

// express
const express = require('express');  //exress allows us to write HTTPS
const app = express();

// controllers
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');

// database
const sequelize = require('./db');
sequelize.sync(); // to drop tables ---> {force: true} inside sync()
app.use(express.json()); // need for POST request and PUT request
app.use(require('./middleware/headers'));

// listen
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index')); // creating an endpoint and serving up a response

// routes
app.use('/auth', user); // auth endpoint
app.use(require('./middleware/validate-session')); // verifying information ("bouncer")
app.use('/pies', pies); // pies endpoint
