const requestPromise = require('request-promise');

const getVenues = () => requestPromise('https://static.wsstack.nn4maws.net/v1/venues/en_gb/venues.json', { json: true });

module.exports = {
  getVenues,
};
