var assert = require('assert');
var db = require("../../../db/db");
describe('DB', function () {
    describe('#getDomain()', function () {
        it('should add and remove a domain', function (done) {
            var dm = {};
            dm.domainName = "test.com";
            dm.upstreamServerIp = "122.222.222.222";
            dm.listenPort = 3000;
            dm.proxyPass = "test";
            dm.proxyRedirect = false;
            dm.saved = false;
            var Domain = db.getDomain();
            var dom = new Domain(dm);  
            
            dom.save(function (err) {
                if (err) {                    
                    console.log("save error: " + err);
                    assert(false);
                } else {                    
                    console.log("save success: ");   
                    assert(true);                
                }
            });
            Domain.findOne({domainName: "test.com"}, null, {}, function (err, results) {
                if (err) {
                    console.log("find error: " + err);
                    assert(false);
                } else {
                    results.remove(function (err) {
                        if (err) {
                            console.log("delete error: " + err);
                            assert(false);
                        } else {
                            console.log("delete success: ");
                            assert(true);
                            done();
                        }
                    });
                }
            });
        });
    });
});

