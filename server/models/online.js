const mongoose = require('mongoose')
const onlineTable = new mongoose.Schema({
    handle:String,
    connection_id:String
})
module.exports = mongoose.model('Online', onlineTable)