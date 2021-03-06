require('dotenv').config();

var express = require('express'); //1 express npm package
var app = express(); //2 create an instance of express, allows us to create express app
var test = require('./controllers/testcontroller') //1 import the route object in a variable called test
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller')
var sequelize = require('./db');

sequelize.sync(); // tip: pass in {force: true} for resetting tables
app.use(express.json());
app.use(require('./middleware/headers'));

// EXPOSED ROUTES -NOT PROTECTED
app.use('/test', test);
app.use('/api/user', user);

// PROTECTED ROUTES
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);


app.listen(3000, function(){
    console.log('App is listening on 3000.')
});