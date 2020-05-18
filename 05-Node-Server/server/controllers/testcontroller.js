var express = require('express'); //1  import the express framework inside variable express
var router = express.Router(); //2 create a variable called router, we are using the express variable to access the Router() method.

//3    //4  //5 path         //6 callback function
router.get('/', function (req, res) {
    //7
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req, res) {
    res.send('This is an about route!');
});

// pass in an object
router.get('/contact', function (req, res) {
    res.send({user: "Mikaela", email: "mikaela.wade@gmail.com"});
});

// pass in an array
router.get('/projects', function (req, res) {
    res.send(["project1", "project2", "project3"]);
});

// pass in an array of objects
router.get('/mycontacts', function (req, res) {
    res.send([
        {user: "tom", email: "tom@gmail.com"}, 
        {user: "sharon", email: "sharon2@hotmail.com"}, 
        {user: "aaron", email: "aaron457@gmail.com"}
    ]);
});
//8
module.exports = router;