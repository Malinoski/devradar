/* NOTES */
// HTTP Methods: GET, POST, PUT (edit), DELETE
// Param types 
// Query Params: request.query (filters, ordering, pagination, etc.)
// Route Params: request.params (params to alter, remove, etc. Example: http://localhost:3333/users/1) 
// Body: request.body (data fro create or alter a registry)

const { Router} = require('express');

const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (request, response)=>{
    return response.send('Hello backend!');
});

routes.get('/devs', DevController.index); // get all users
routes.post('/devs', DevController.store); // register a user
routes.get('/search', SearchController.index); // search a user by tech(s)

module.exports = routes;