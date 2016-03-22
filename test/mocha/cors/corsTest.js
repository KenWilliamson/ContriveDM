var cors = require("../../../cors/cors");
var assert = require('assert');
describe('Cors', function () {
    describe('#CORS()', function () {
        it('should return CORS headers', function () {
            var req = {};
            req.get = function (origin) {

            };
            req.url = "http://www.google.com";
            req.origin = "google";
            req.method = "OPTIONS";
            var res = {};
            res.send = function (code) {
                if (code === 200) {
                    assert(true);
                } else {
                    assert(false);
                }
            };
            var h = [];
            res.header = function (header, val) {
                h.push(header);
            };
            cors.CORS(req, res, function () {
                assert(true);
            });
            if (h.length === 3) {
                assert(true);
            } else {
                assert(false);
            }

        });
    });
});

