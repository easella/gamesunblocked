var proxy = require('express-http-proxy');
var http=require("http")

var app = require('express')();
var server=http.createServer(app)


app.use(proxy('https://games.awdrgyjil1234.repl.co/'));
server.listen(8080)
