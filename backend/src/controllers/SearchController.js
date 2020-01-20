const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){

        // Search users in a range/distance (10km)
        // Filter by tech

        // console.log(request.query);

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        // console.log(techsArray);

        const devs = await Dev.find({
            techs: { // all devs who has these techs
                $in: techsArray,
            }, 
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, // 10km

                }
            }
        })
        
        // console.log(devs);
        return response.json({devs});
    }
}