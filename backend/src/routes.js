/* NOTES */
// HTTP Methods: GET, POST, PUT (edit), DELETE
// Param types 
// Query Params: request.query (filters, ordering, pagination, etc.)
// Route Params: request.params (params to alter, remove, etc.)
// Body: request.body (data fro create or alter a registry)

const { Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.get('/', (request, response)=>{
    return response.send('Hello backend!');
});

// Register a developer
routes.post('/devs', async (request, response)=> {

    const { github_username, techs } = request.body;
    
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    // console.log(apiResponse.data);

    const { name = login, avatar_url, bio } = apiResponse.data;
    // console.log(name, avatar_url);

    const techsArray = techs.split(',').map(tech => tech.trim());
    // console.log(techsArray);

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    // return response.json({message: 'Hello World!!'}); //json
    return response.json(dev); //json
})

module.exports = routes;