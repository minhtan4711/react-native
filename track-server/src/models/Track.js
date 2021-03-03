const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // refrence to some other object inside mongodb
        ref: 'User' // point to User Schema
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})

mongoose.model('Track', trackSchema)