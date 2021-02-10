const WebSocket = require('ws');

const connection = new WebSocket.Server({
    port: 8080
})

let socket1;
let socket2;

let userIndex = 1;

connection.on('connection', (socket) => {
    console.log('connected!')
    
    
    if(socket1) {
        socket2 = {
            userId: userIndex++,
            socket
        }
    } else {
        socket1 = {
            userId: userIndex++,
            socket
        }
    }


    socket.on('message', message => {
        if(socket == socket1) {
            // socket2.send
        }
        if(socket == socket2) {
            // socket1.send
        }
    })

})