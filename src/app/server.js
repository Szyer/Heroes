"use strict";
exports.__esModule = true;
var express = require("express");
var listen = require("socket.io").listen;
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var users = [];
var connections = [];
server.listen(4000);
app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/index.html");
});
io.sockets.on("connection", function (socket) {
    connections.push(socket);
    console.log("connected: %s socket connected", connections.length);
    socket.on("disconnect", function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected: %s socket disconnected", connections.length);
    });
    socket.on("send message", function (data) {
        console.log(data);
        io.sockets.emit("new message", { msg: data });
    });
});
console.log('server is listening');
