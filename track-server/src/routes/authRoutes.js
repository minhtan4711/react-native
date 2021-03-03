//authentication request handling
const express = require('express')
const mongoose = require('mongoose')
// token send back to user for future request
const jwt = require('jsonwebtoken')
//acess to user's model
const User = mongoose.model('User') //check the email if duplicate or not and User got all the user store in database

const router = express.Router()


//place all information to req object (req.body)
router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    // email user could be duplicate
    try {
        const user = new User({ email, password })
        await user.save()

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message) // 422: Invalid data
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email and password" })
    }

    // mongoose take time to reach out to mongodb
    const user = await User.findOne({ email })

    if (!user) {
        return res.status(422).send({ error: "Invalid password or email" })
    }
    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token })
    } catch (err) {
        return res.status(422).send({ error: "Invalid password or email" })
    }
})

module.exports = router

//postman: tell the server that we got some information attach to post request => head to Headers tab and add fill Content-Type to Key prop and application/json to value prop  