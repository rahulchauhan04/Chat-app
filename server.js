const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const socketIoServer = socketIo.Server;

const app = express(); 
app.use(express.static('frontend'));

const httpVersionOfApp = http.createServer(app); // socket io works with 

const io = new socketIoServer(httpVersionOfApp);
io.on('connection',(socket)=>{
    socket.on('sending message',(data)=>{
        io.emit('io spreading message',data);
    })
})

httpVersionOfApp.listen(3000);