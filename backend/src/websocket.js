const socketio = require('socket.io'); 
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = []; // To store users (in production this must be store in more robust way)

exports.setupWebSocket = (server) => {
    io = socketio(server);

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

exports.findConnections = (coordinates, techs) => {
    return connections.filter( connection => {
        return calculateDistance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.includes(item))
    });
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}