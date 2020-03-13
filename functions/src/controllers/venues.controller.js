const venuesService = require('../services/wetherspoons.service');

const getVenues = async function (req, res) {
    try {
        const venues = await venuesService.getVenues();
        res.status(200).send(venues);
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

module.exports = {
    getVenues
};