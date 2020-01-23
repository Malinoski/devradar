import socketio from 'socket.io-client';

const socket = socketio('https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io', {
    autoConnect: false,
});

function connect() {
    socket.connect();
}

function disconnect() {
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect
}