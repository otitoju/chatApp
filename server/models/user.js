const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{
    strict: false
})
module.exports = mongoose.model('User', userSchema)