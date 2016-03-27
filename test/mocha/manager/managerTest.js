var assert = require('assert');
var db = require("../../../db/db");
var domainManager = require("../../../managers/DomainManager");
var btoa = require('btoa')
describe('Manager', function () {
    describe('#addDomain()', function () {
        it('should add a domain', function (done) {
            //db.initializeMongoDb();
            // setTimeout(function () {
            var req = {};
            req.domainName = "test.com";
            req.upstreamServerIp = "123.456.789.123";
            req.listenPort = "80";
            req.proxyPass = "http://appUpstream";
            req.proxyRedirect = "off";
            req.proxySetHeader1 = "Host $host";
            req.proxySetHeader2 = "X-Real-IP $remote_addr";
            req.proxySetHeader3 = "X-Forwarded-For $proxy_add_x_forwarded_for";
            req.proxySetHeader4 = "X-Forwarded-Host $server_name";
            req.saved = false;
            req.domains = [];
            req.domains.push("test.com");
            req.domains.push("www.test.com");
            req.ssl = {};
            req.ssl.listenPort = 443;
            req.ssl.sslCertificate = "somelocation";
            req.ssl.sslCertificateKey = "someKey";            
            domainManager.addDomain(req, function (result) {
                if (result.success) {
                    assert(true);
                    done();
                } else {
                    assert(false);
                }
            });
            //}, 1000);

        });
    });
});

