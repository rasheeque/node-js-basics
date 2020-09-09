const jwt = require('jsonwebtoken');
const config = require('./config');

const checkToken = (req, res, next) => {
    let token = req.headers["authorization"]
    console.log(token)
    next()

}
module.exports = { checkToken: checkToken };