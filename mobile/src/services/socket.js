import socketio from 'socket.io-client';

const socket = socketio('https://3333-f4813423-db02-471a-aceb-d5195425dc5f.ws-us02.gitpod.io', {
    autoConnect: false,
});

function connect(latitude, longitude, techs) {

    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }
    socket.connect();


    /*
    // Test received message from mobile
    socket.on('message', text => {
        console.log(text);
    })*/
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