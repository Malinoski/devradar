// REST AIP
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.set('useCreateIndex', true); // To remove the warning: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.connect('mongodb+srv://ownistack:ownistack@omnistack-cwf0c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);