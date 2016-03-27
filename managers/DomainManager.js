var manager = require("./manager");
var db = require("../db/db");
exports.addDomain = function (json, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(json);
    if (isOk) {
        if (json.domainName && json.domains && json.domains.length > 0) {
            var Domain = db.getDomain();
            Domain.findOne({name: json.domainName}, function (err, results) {
                console.log("found domain in create: " + JSON.stringify(results));
                if (!err && (results === undefined || results === null)) {
                    var domainJson = {};
                    domainJson.domainName = json.domainName;
                    domainJson.upstreamServerIp = json.upstreamServerIp;
                    domainJson.listenPort = json.listenPort;
                    domainJson.proxyPass = "http://appUpstream";
                    domainJson.proxyRedirect = "off";
                    domainJson.proxySetHeader1 = "Host $host";
                    domainJson.proxySetHeader2 = "X-Real-IP $remote_addr";
                    domainJson.proxySetHeader3 = "X-Forwarded-For $proxy_add_x_forwarded_for";
                    domainJson.proxySetHeader4 = "X-Forwarded-Host $server_name";
                    domainJson.saved = false;
                    var dom = new Domain(domainJson);
                    dom.save(function (err) {
                        if (err) {
                            returnVal.message = "save failed";
                            console.log("save error: " + err);
                            callback(returnVal);
                        } else {
                            var srvJson = {};
                            srvJson.domainName = json.domains[0];
                            srvJson.domain = dom;
                            var ServerName = db.getServerName();
                            var srv = new ServerName(srvJson);
                            srv.save(function (err) {
                                if (err) {
                                    returnVal.message = "server name save failed";
                                    console.log("save error: " + err);
                                    callback(returnVal);
                                } else {
                                    if (json.domains.length > 1) {
                                        var srvJson2 = {};
                                        srvJson2.domainName = json.domains[1];
                                        srvJson2.domain = dom;
                                        var srv2 = new ServerName(srvJson2);
                                        srv2.save(function (err) {
                                            if (err) {
                                                returnVal.message = "server name save failed";
                                                console.log("server name save error: " + err);
                                                callback(returnVal);
                                            } else {
                                                if (json.ssl) {
                                                    saveSsl(json, dom, function (success) {
                                                        if (!success) {
                                                            returnVal.message = "ssl save failed";
                                                            console.log("ssl save error: " + err);
                                                            callback(returnVal);
                                                        } else {
                                                            returnVal.success = true;
                                                            callback(returnVal);
                                                        }
                                                    });
                                                } else {
                                                    returnVal.success = true;
                                                    callback(returnVal);
                                                }

                                            }
                                        });
                                    } else if (json.ssl) {
                                        saveSsl(json, dom, function (success) {
                                            if (!success) {
                                                returnVal.message = "ssl save failed";
                                                console.log("ssl save error: " + err);
                                                callback(returnVal);
                                            } else {
                                                returnVal.success = true;
                                                callback(returnVal);
                                            }
                                        });
                                    } else {
                                        returnVal.success = true;
                                        callback(returnVal);
                                    }
                                }
                            });
                        }
                    });
                } else {
                    returnVal.message = "existing domain";
                    callback(returnVal);
                }
            });
        } else {
            callback(returnVal);
        }
    } else {
        callback(returnVal);
    }
};

exports.updateDomain = function (json, callback) {

};
exports.getDomain = function (id, callback) {

};
exports.deleteDomain = function (id, callback) {

};

var saveSsl = function (json, dom, callback) {
    var sslJson = {};
    sslJson.listenPort = json.ssl.listenPort;
    sslJson.sslCertificate = json.ssl.sslCertificate;
    sslJson.sslCertificateKey = json.ssl.sslCertificateKey;
    sslJson.domain = dom;
    var Ssl = db.getSsl();
    var ssl = new Ssl(sslJson);
    ssl.save(function (err) {
        if (err) {
            callback(false);
        } else {
            callback(true);
        }
    });
};