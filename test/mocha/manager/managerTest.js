var assert = require('assert');
var db = require("../../../db/db");
var domainManager = require("../../../managers/DomainManager");
var domainListManager = require("../../../managers/DomainListManager");
var btoa = require('btoa')
describe('Manager', function () {
    //do add here
    var domainName = "test.com";
    var domainId;
    var domainToUpdate;
    describe('#addDomain()', function () {

        it('should add, get, update, and delete a domain', function (done) {
            var req = {};
            req.domainName = domainName;
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
                    domainListManager.domainList(function (domainList) {
                        if (domainList && domainList.length > 0) {
                            var Domain = db.getDomain();
                            Domain.findOne({domainName: domainName}, function (err, results) {
                                domainId = results._id;
                                console.log("found domain in test update: " + JSON.stringify(results));
                                if (!err && results) {
                                    domainManager.getDomain(domainId, function (findResult) {
                                        console.log("found domain in test getDomain: " + JSON.stringify(findResult));
                                        if (findResult) {
                                            domainToUpdate = findResult;
                                            var req = domainToUpdate;
                                            req.id = domainToUpdate._id;
                                            req.upstreamServerIp = "123.456.789.999";
                                            req.listenPort = "8080";
                                            req.domains = [];
                                            req.domains.push("test.com");
                                            req.ssl = {};
                                            req.ssl.listenPort = 4433;
                                            req.ssl.sslCertificate = "somelocation2";
                                            req.ssl.sslCertificateKey = "someKey2";
                                            domainManager.updateDomain(req, function (updateresult) {
                                                if (updateresult.success) {
                                                    
                                                    domainManager.deleteDomain(domainId, function (result) {
                                                        if (result.success) {
                                                            assert(true);
                                                            done();
                                                        } else {
                                                            assert(false);
                                                        }
                                                    });
                                                    
                                                    //assert(true);
                                                    //done();
                                                } else {
                                                    assert(false);
                                                }
                                            });

                                            //assert(true);
                                            //done();
                                        } else {
                                            assert(false);
                                        }
                                    });
                                    //assert(true);
                                    //done();
                                } else {
                                    console.log("error: " + JSON.stringify(err));
                                    assert(false);
                                }
                            });
                            //assert(true);
                            //done();
                        } else {
                            assert(false);
                        }
                    });
                    //assert(true);
                    //done();
                } else {
                    assert(false);
                }
            });
        });

    });

});

