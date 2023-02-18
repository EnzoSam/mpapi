var express = require('express');
var router = express.Router();

var Mpcontroller = require('../controller/mpcontroller');

router.get('/', Mpcontroller.test);

module.exports = router;
