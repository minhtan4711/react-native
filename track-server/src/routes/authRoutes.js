const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User') //check the email if trung or not

const router = express.Router()

router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    const user = new User({ email, password })
    await user.save()

    res.send('You made a post request')
})

module.exports = router
