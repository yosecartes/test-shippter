var express = require('express');
var router = express.Router();
var shipController = require('../controller/shipsController')

router.route('/')
    .get(shipController.get)
    .post(shipController.update)
    .put(shipController.update)
    .delete(shipController.delete);

module.exports = router;