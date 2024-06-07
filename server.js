const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const socketIoServer = socketIo.Server;

const app = express();
const httpVersionOfApp = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000);
