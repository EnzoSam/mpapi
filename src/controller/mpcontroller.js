
var MpService = require('../service/mpservice');

var controller = {

    test: function (req, res) {

        let m = MpService.test();
        return res.status(200).send({
            message: m
        });
    }
}

module.exports = controller;