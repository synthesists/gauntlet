const request_promise = require('request-promise');

const getVenues = () => request_promise('https://static.wsstack.nn4maws.net/v1/venues/en_gb/venues.json', {json: true});

const getDrinks = async (venueId) => {
    const response = await request_promise(`https://static.wsstack.nn4maws.net/content/v1/menus/${venueId}.json`, {json: true});
    const drinks = response.menus.find(element => element.name === "Drinks");
    return drinks
};


module.exports = {
    getVenues,
    getDrinks
};