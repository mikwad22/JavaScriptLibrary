var express = require('express'); //1 express npm package
var app = express(); //2 create an instance of express, allows us to create express app

 //3        //4 the given path is localhost:3000
app.listen(3000, function(){
     console.log('Hey man!!') //5 callback function
 });

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

var test = require('./controllers/testcontroller') //1 import the route object in a variable called test
        
app.use('/test', test)