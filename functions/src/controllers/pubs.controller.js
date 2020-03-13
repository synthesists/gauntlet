const pubsService = require('../services/pubs.service');

const getPubs = async function (req, res) {
    try {
        const fields = req._parsedUrl.query
        const pubs = await pubsService.getPubs(fields);
        res.status(200).send(pubs);
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

module.exports = {
    getPubs
};