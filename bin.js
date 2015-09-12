#!/usr/bin/env node

var compress = require('compression');
var express = require('express');

var server = express();

server.use(compress({
  threshold: false // gzip everything.
}));

server.use(express.static( // This middleware takes care of sending status 304.
  process.cwd(), // Expose everything in the cwd.
  {
    maxAge: '365d'  // All static files stay in the browser's cache forever.
  }
));

var port = 8000;

server.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log('Server running at http://localhost:' + port);
});
