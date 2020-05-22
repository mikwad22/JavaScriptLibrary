module.exports = (req, res, next) => {  
    res.header('access-control-allow-origin', '*'); // reponse header, allowing access to server * = from anywhere
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); // methods allowed
    res.header('access-contorl-allow-headers', 'Origin, X-Requested-With, Content-Type, Authorization'); // response to request

    next();
}