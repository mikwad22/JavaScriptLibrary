const express = require('express'); // imported express
const router = express.Router(); // created router variable

router.get('/', (req, res) => res.send('I love pie')); //sending a reponse of I love pie

module.exports = router  // export the file