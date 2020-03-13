const request_promise = require('request-promise');

const getVenues = () => request_promise('https://static.wsstack.nn4maws.net/v1/venues/en_gb/venues.json', {json: true});

module.exports = {
    getVenues
};