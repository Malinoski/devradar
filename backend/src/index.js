// REST AIP
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);
setupWebSocket(server);

mongoose.set('useCreateIndex', true); // To remove the warning: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.connect('mongodb+srv://ownistack:ownistack@omnistack-cwf0c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);