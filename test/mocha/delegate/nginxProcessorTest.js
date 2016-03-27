var assert = require('assert');
var nginxProcessor = require("../../../delegate/nginxProcessor");
describe('nginxProcessor', function () {
    describe('#testNginxOperation()', function () {
        it('should set, check and delete nginx restart setting', function (done) {
            nginxProcessor.setNginxRestart(function (res1) {
                console.log("set first time: " + res1.success);
                if (res1.success) {
                    nginxProcessor.setNginxRestart(function (res2) {
                        console.log("set second time: " + res2.success);
                        if (res2.success) {
                            nginxProcessor.getIginxRestart(function (restart1) {
                                console.log("status of restart before clear: " + restart1);
                                if (restart1) {
                                    nginxProcessor.clearNginxRestart(function (cres) {
                                        console.log("status of clear operation: " + cres.success);
                                        if (cres.success) {
                                            nginxProcessor.getIginxRestart(function (restart3) {
                                                console.log("status of restart after clear: " + restart3);
                                                if (restart3) {
                                                    assert(false);
                                                }
                                                done();
                                            });
                                        } else {
                                            assert(false);
                                        }
                                    });
                                } else {
                                    assert(false);
                                }
                            });
                        } else {
                            assert(false);
                        }
                    });
                } else {
                    assert(false);
                }
            });
        });
    });
});