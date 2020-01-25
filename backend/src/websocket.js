const socketio = require('socket.io'); 
const parseStringAsArray = require('./utils/parseStringAsArray');

const connections = []; // To store users (in production this must be store in more robust way)

exports.setupWebSocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        
        // console.log(socket.id);
        // console.log(socket.handshake.query);

        const { latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs),
        });
        /*
        // test
        setTimeout( () => {
            socket.emit('message','Hello!!');
        }, 3000);*/
    });
};