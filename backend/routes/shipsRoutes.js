var express = require('express');
var router = express.Router();
var shipController = require('../controller/shipController')

router.route('/')
    .get(shipController.get)
    .post(shipController.new)
    /*.put(shipController.update)
    .delete(shipController.delete);
 */
module.exports = router;