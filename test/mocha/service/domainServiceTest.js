var assert = require('assert');
var db = require("../../../db/db");
var service = require("../../../services/service");
var domainService = require("../../../services/domainService");
var btoa = require('btoa')

describe('domainService', function () {
    describe('#addUser()', function () {
        it('should add, get, update, and delete a user', function (done) {
            //db.initializeMongoDb();
            //setTimeout(function () {
            var req = {};
            req.header = function (val) {
                if (val === "authorization") {
                    return "Basic " + btoa("admin:admin");
                }
            };
            req.params = {};
            req.params.id = 1;
            var body = {};
            body.username = "aaa";
            req.body = body;
            req.is = function (val) {
                if (val === 'application/json') {
                    return true;
                } else {
                    return false;
                }
            }
            var res1 = {};
            res1.statusCode;
            res1.status = function (val) {
                this.statusCode = val;
                console.log("res status: " + val);
            };
            res1.send = function (val) {
                if (this.statusCode === 401) {
                    assert(false);
                } if (this.statusCode === 415) {
                    assert(false);
                } else {
                    if (val.success === false) {
                        assert(true);
                        //done();
                    }
                }
            };

            domainService.create(req, res1);

            var res2 = {};
            res2.statusCode;
            res2.status = function (val) {
                this.statusCode = val;
                console.log("res status: " + val);
            };
            res2.send = function (val) {
                if (this.statusCode === 401) {
                    assert(false);
                } else {
                    if (val.success === false) {
                        assert(true);
                        //done();
                    }
                }
            };
            domainService.update(req, res2);


            var res3 = {};
            res3.statusCode;
            res3.status = function (val) {
                this.statusCode = val;
                console.log("res status: " + val);
            };
            res3.send = function (val) {
                if (this.statusCode === 401) {
                    assert(false);
                } else {
                    if (val) {
                        assert(true);
                        //done();
                    }
                }
            };
            
            domainService.get(req, res3);
            
            
            
            var res4 = {};
            res4.statusCode;
            res4.status = function (val) {
                this.statusCode = val;
                console.log("res status: " + val);
            };
            res4.send = function (val) {
                if (this.statusCode === 401) {
                    assert(false);
                } else {
                   if (val.success === false) {
                        assert(true);
                        done();
                    }
                }
            };
            
            domainService.delete(req, res4);
            
            
            var res5 = {};
            res5.statusCode;
            res5.status = function (val) {
                this.statusCode = val;
                console.log("res status: " + val);
            };
            res5.send = function (val) {
                if (this.statusCode === 401) {
                    assert(false);
                } else {
                    if (val) {
                        assert(true);
                        //done();
                    }
                }
            };
            domainService.list(req, res5);

        });
    });
});


