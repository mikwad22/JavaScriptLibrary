// VERY IMPORTANT SECURITY

var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS'){
        next()
    } else {
        var sessionToken = req.headers.authorization; // variable session token is created to hold the token, then pulled from the authorization header
        console.log(sessionToken) // token is printed to console
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.'}); // if no token present
        else {  // the verify method decodes the token with the provided secret
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
                if (decoded){  // if successful, decoded with contain the payload
                    User.findOne({where: { id: decoded.id}}).then(user => {  // if decoded has a value, the sequelize findOne method looks for an id in the users table that matches
                        req.user = user; // the callback sets the user value as the id
                        next();
                    },
                    function(){
                        res.status(401).send({error: 'Not authorized'}); // if no matching id is found
                    });
                } else {
                    res.status(400).send({error: 'Not authorized'}); // if no value for decoded
                }
            });
        }
   }
}
