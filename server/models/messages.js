const mongoose = require('mongoose')
const messageTable = new mongoose.Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
})
module.exports = mongoose.model('Message', messageTable)