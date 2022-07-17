const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const router = require('./router');
const { join } = require('path');
const { isNumber } = require('lodash');
const { onConnection } = require('./services/onConnection');

const app = express();
const port = 3000;
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
  onConnection(io, socket);
})

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static(join(__dirname, '../', 'public')));
app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(isNumber(err.code) ? err.code : 500)
    .send({
      code: err.code || 500,
      message: err.message,
    });
});

httpServer.listen(port);