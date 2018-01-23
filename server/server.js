const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {   // socket is dame guy from index.html
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});


// http://localhost:3000/socket.io/socket.io.js
