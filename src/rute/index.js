var express = require('express');
var router = express.Router();

var Mpcontroller = require('../controller/mpcontroller');

router.get('/', Mpcontroller.test);
router.post('/notifications', Mpcontroller.test);

module.exports = router;
