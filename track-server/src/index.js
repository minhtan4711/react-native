require('./models/User') //define one time
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

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

app.get('/', (req, res) => {
    res.send("Hi there")
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})