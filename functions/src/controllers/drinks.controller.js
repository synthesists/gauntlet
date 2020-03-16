const drinksService = require('../services/wetherspoons.service');

const getDrinks = async (req, res) => {
    try {
        const venueId = req.body.venueId
        const drinks = await drinksService.getDrinks(venueId);
        res.status(200).send(drinks);
    } catch(err) {
        console.log(err);
        
        res.send(err.message);
    }
};

module.exports = {
    getDrinks
};