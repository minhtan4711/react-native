// take incoming request and do some kind of pre processing on it
// user include some token then we can allow them access some different route inside our application
// not a valid user then send back an error
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')


// add headers to request with Authorization Key with "Bearer token" in Value section
module.exports = (req, res, next) => {
    // if user have valid token then call next function
    const { authorization } = req.headers
    // express will push to lower case to any Headers's name

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in.' })
    }
    // authorization === 'Bearer token'
    const token = authorization.replace('Bearer ', '') // return just token
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'You must be logged in.' })
        }

        // payload === userId
        const { userId } = payload

        const user = await User.findById(userId) // we know the user
        req.user = user
        next();
    })
}