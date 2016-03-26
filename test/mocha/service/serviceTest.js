var assert = require('assert');
var db = require("../../../db/db");
var service = require("../../../services/service");
var btoa = require('btoa')
describe('service', function () {
    describe('#authenticate()', function () {
        it('should athenticate a user', function (done) {
            db.initializeMongoDb();
            setTimeout(function () {
                var req = {};
                req.header = function(val){
                    if(val === "authorization"){
                        return "Basic " + btoa("admin:admin");
                    }
                };
                var res = {};
                res.statusCode;
                res.status = function(val){
                    this.statusCode = val;
                    console.log("res status: " + val);
                };
                res.send = function(val){
                    if(this.statusCode === 401){
                        assert(false);
                    }                    
                };
                service.authenticate(req, res, function(creds){
                    if(creds.logginSuccess){
                        assert(true);
                        done();
                    }else{
                        assert(false);
                    }
                });
            }, 1000);

        });
    });
});

