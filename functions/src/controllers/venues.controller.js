const venuesService = require('../services/wetherspoons.service');

const getVenues = async (req, res) => {
  try {
    const venues = await venuesService.getVenues();
    res.status(200).send(venues);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getVenues,
};
