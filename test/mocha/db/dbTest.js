var assert = require('assert');
var db = require("../../../db/db");
describe('DB', function () {
    describe('#getDomain()', function () {
        it('should add and remove a domain', function (done) {
            var dm = {};
            dm.domainName = "test6.com";
            dm.upstreamServerIp = "122.222.222.222";
            dm.listenPort = 3000;
            dm.proxyPass = "test";
            dm.proxyRedirect = "off";
            dm.proxySetHeader1 = "Host $host";
            dm.proxySetHeader2 = "X-Real-IP $remote_addr";
            dm.proxySetHeader3 = "X-Forwarded-For $proxy_add_x_forwarded_for";
            dm.proxySetHeader4 = "X-Forwarded-Host $server_name";
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
            Domain.findOne({domainName: "test6.com"}, null, {}, function (err, results) {
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

