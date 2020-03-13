const venuesService = require('../services/venues.service');

const getVenues = async function (req, res) {
    try {
        const venues = await venuesService.getVenues();
        console.log("HERE", venues)
        res.status(200).send(venues);
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

module.exports = {
    getVenues
};