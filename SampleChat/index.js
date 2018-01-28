var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", function (socket) {
    console.log('User Connected');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on("disconnect", () => {
       console.log('User Disconnected');        
    });
});

http.listen(3000, function () {
    console.log("Listening At Port 3000...");
});