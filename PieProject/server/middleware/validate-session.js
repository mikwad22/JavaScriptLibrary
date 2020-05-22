const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => { 
    const token = req.headers.authorization; // authorization file to check if correct

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // pass in token and secret
        if(!err && decoded){ // if no error
            User.findOne({ // go in database and find user
                where: {
                    id: decoded.id
                }
            }, console.log(decoded))
            .then(user => { 
                if(!user) throw 'err' // if no user throw an error, otherwise:
                req.user = user;

                next(); // breaks us out of the code block we are in
            }) 
            .catch(err => next(err)) // catch the error
        } else {
            req.errors = err;
            return res.status(500).send('Not authorized')
        }
    })
}

module.exports = validateSession;