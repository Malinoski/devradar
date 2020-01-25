const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections } = require('../websocket');

// Possible method: index, show, store, update, destroy

module.exports = {

    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;

        // Check if user exists
        let dev = await Dev.findOne({github_username});
        
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            console.log(apiResponse.data);

            const { name = login, avatar_url, bio } = apiResponse.data;
            console.log(name, avatar_url);

            const techsArray = parseStringAsArray(techs);
            console.log(techsArray);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

            // Filter connections, consiring: 10km proximity; at least one technology 
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray, 
            );

            console.log(sendSocketMessageTo)
        }

        // console.log(dev);
        // return response.json({message: 'Hello World!!'}); //json
        return response.json(dev); //json
    },
    
    /*
    async update(request, response){

    }, 

    async destroy(request, response){

    }*/
}