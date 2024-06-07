const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const socketIoServer = socketIo.Server;

const app = express();
app.use(express.static('frontend'));

const httpVersionOfApp = http.createServer(app);
const io = new socketIoServer(httpVersionOfApp);

io.on('connection', (socket) => {
     socket.io('sending message', (data) => {
          io.emit('io spreading message', data);
     });
});

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000);
