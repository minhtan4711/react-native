const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//create uses table 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', function (next) { // pre save hook
    // not use arrow function because we just want the user in this scope not context all the file
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => { // 10 rounds mean how complex the password is
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

// check password when user sign in again
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {

    const user = this

    return new Promise((resolve, reject) => { // not use async await because bcrypt using callback function
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }
            if (!isMatch) {
                return reject(false)
            }

            resolve(true)
        })
    })
}

mongoose.model('User', userSchema)