const express = require('express')
const app = express()
const http=require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
require("./controllers/chatcontroller.js")(app,io);
//port configuration
const port = 9090
//database configuration
mongoose.connect("mongodb://localhost:27017/chatApp")
.then( () => {
    http.listen(port, () => {
        console.log("chatApp is listening on http://"+ip.address()+":9090")
    })
})
.catch(err => console.log(err))