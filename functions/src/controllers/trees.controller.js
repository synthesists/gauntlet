const treesService = require('../services/trees.service');

const getTree = function (req, res) {
    try {
        // console.log(req.body)
        const rounds = req.body.rounds
        const tree = treesService.tree(rounds);
        res.status(200).send(tree);
    } catch(err) {
        console.log(err);
        
        res.status(err.statuscode).send(err.message);
    }
};

module.exports = {
    getTree
};