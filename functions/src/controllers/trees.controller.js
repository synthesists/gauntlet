const treesService = require('../services/trees.service');

const getTree = async (req, res) => {
    try {
        const rounds = req.body.rounds
        const venueId = req.body.venueId
        const tree = await treesService.tree(rounds, venueId);
        res.status(200).send(tree);
    } catch(err) {
        console.log(err);
        
        res.send(err.message);
    }
};

module.exports = {
    getTree
};