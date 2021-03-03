//root
require('./models/User') //define one time
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser') //automatically pass information associated with the body property of incoming request 
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('../middlewares/requireAuth')

//use express api
const app = express() //present all the application with some root handlers

//root handler: send information signup through express API
app.use(bodyParser.json())
//import signin signup procedure: root handler
app.use(authRoutes)
app.use(trackRoutes)


//connect to mongodb database
const mongoUri = 'mongodb+srv://minhtan471100:mynewbike85751@track-server.m9ugh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("Connected")
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongoose', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})
//listen to port
app.listen(3000, () => {
    console.log('listening on port 3000')
})