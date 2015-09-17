var http = require('http');
var config = require('./config');

// Create Express web app
var app = require('./webapp');

// Create an HTTP server and listen on the configured port
var server = http.createServer(app);
server.listen(config.port, function() {
  console.log('Express server listening on *:' + config.port);
});
