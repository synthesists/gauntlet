const treesService = require('../services/trees.service');
const {
  getDrinks,
  getDrink,
} = require('../services/wetherspoons.service');

const getTree = async (req, res) => {
  try {
    const { rounds } = req.body;
    const { venueId } = req.body;
    const drinks = await getDrinks(venueId);
    const tree = treesService.getTree(rounds, (...params) => getDrink(drinks, ...params));
    res.status(200).send(tree);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports = {
  getTree,
};
