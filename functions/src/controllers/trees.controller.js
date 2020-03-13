const treesService = require('../services/trees.service');

const getTree = async function (req, res) {
    try {
        const tree = await treesService.getTree(rounds);
        res.status(200).send(tree);
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

module.exports = {
    getTree
};