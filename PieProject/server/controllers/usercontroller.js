const router = require('express').Router();
const User = require('../db').import('../models/user'); // takes you back a folder
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// SIGNUP
router.post('/signup', (req, res) => { // need to include subrouting
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10) // salt number, how many times to be salted and genterate random data
    })
        .then(
            createSuccess = (user) => { // passing in user created
                let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24}) // token expires in 24hrs
                res.json({
                    user: user,
                    message: 'user created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err)
        )
        .catch(err => res.status(500).json({
            error: err  // going to do the same thing as above
        }))
}) 

// SIGNIN
router.post('/login', (req, res) => {
    User.findOne({ // finding a single user
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if(user){
                bcrypt.compare(req.body.password, user.password, (err, matches) => { // taking password and comparing password in the database
                    if (matches){
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.json({
                            user: user,
                            message: 'user successfully logged in',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({error: 'bad gateway'}) // passwords did not match
                    }
                }) 
            } else {
                res.status(500).send({error: 'failed to authenticate'}) // did not find user
            }
        }, err => res.status(501).send({error: 'failed to process'})) // issue somewhere else
})

module.exports = router;