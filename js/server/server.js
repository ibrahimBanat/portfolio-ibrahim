'use strict';

// requireing express library
const express = require('express'); // installed express first

const server = express(); // server has all the porper and methods for express.

const PORT = process.env.PORT || 3000; //

// route
server.get('/', (req, res) => {
  res.send('home route');
});
server.get('/test', (req, res) => {
  res.send('your server is alive!');
});

server.get('/data', (req, res) => {
  let family = [{ Name: 'ibrahim' }, { Name: 'hello' }];
  res.json(family);
});
// making sure that the  server is ready for lisnineg for requests
server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
