//var io = require('socket.io').listen(3001);
var app = require('express')(),
    server = require('http').createServer(app),
    fs = require('fs');

var port = 3001;
server.listen(port);

// Handle all incoming web requests
app.get("*", function (request, response) {
    // check if the file exists on the file system
    fs.exists(__dirname + '/public' + request.url, function (exists) {
        if (exists) {
            // return the file found
            response.sendfile(__dirname + '/public' + request.url);
        }else{
            // cant find the file
            response.end("404!");
            if(program.debug){
                console.log("404 - " + __dirname + '/public' + request.url );
            }
        }
    });
});