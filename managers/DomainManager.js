var manager = require("./manager");
var db = require("../db/db");
var nginxProcessor = require("../delegate/nginxProcessor");
exports.addDomain = function (json, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(json);
    console.log("security check: " + isOk);
    if (isOk) {
        if (json.domainName && json.domains && json.domains.length > 0) {
            var Domain = db.getDomain();
            Domain.findOne({domainName: json.domainName}, function (err, results) {
                if (!err && (results === undefined || results === null)) {
                    console.log("found domain in create: " + JSON.stringify(results));
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
                    console.log("domain to create: " + JSON.stringify(domainJson));
                    var dom = new Domain(domainJson);
                    dom.save(function (saveErr) {
                        if (saveErr) {
                            returnVal.message = "save failed";
                            console.error("save error: " + saveErr);
                            callback(returnVal);
                        } else {
                            var srvJson = {};
                            srvJson.domainName = json.domains[0];
                            srvJson.domain = dom;
                            var ServerName = db.getServerName();
                            var srv = new ServerName(srvJson);
                            srv.save(function (srvErr) {
                                if (srvErr) {
                                    returnVal.message = "server name save failed";
                                    console.error("save error: " + srvErr);
                                    callback(returnVal);
                                } else {
                                    if (json.domains.length > 1) {
                                        var srvJson2 = {};
                                        srvJson2.domainName = json.domains[1];
                                        srvJson2.domain = dom;
                                        var srv2 = new ServerName(srvJson2);
                                        srv2.save(function (srv2Err) {
                                            if (srv2Err) {
                                                returnVal.message = "server name save failed";
                                                console.error("server name save error: " + srv2Err);
                                                callback(returnVal);
                                            } else {
                                                if (json.ssl) {
                                                    saveSsl(json, dom, function (success) {
                                                        if (!success) {
                                                            returnVal.message = "ssl save failed";
                                                            callback(returnVal);
                                                        } else {
                                                            returnVal.success = true;
                                                            nginxProcessor.setNginxRestart();
                                                            callback(returnVal);
                                                        }
                                                    });
                                                } else {
                                                    returnVal.success = true;
                                                    nginxProcessor.setNginxRestart();
                                                    callback(returnVal);
                                                }

                                            }
                                        });
                                    } else if (json.ssl) {
                                        saveSsl(json, dom, function (success) {
                                            if (!success) {
                                                returnVal.message = "ssl save failed";
                                                callback(returnVal);
                                            } else {
                                                returnVal.success = true;
                                                nginxProcessor.setNginxRestart();
                                                callback(returnVal);
                                            }
                                        });
                                    } else {
                                        returnVal.success = true;
                                        nginxProcessor.setNginxRestart();
                                        callback(returnVal);
                                    }
                                }
                            });
                        }
                    });
                } else {
                    console.error("find domain error: " + err);
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
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(json);
    if (isOk) {
        console.log("json in update: " + JSON.stringify(json));
        if (json.domainName) {
            var Domain = db.getDomain();
            Domain.findById(json.id, function (err, results) {
                if (!err && results) {
                    console.log("found domain in update: " + JSON.stringify(results));
                    var dm = results;
                    dm.upstreamServerIp = json.upstreamServerIp;
                    dm.listenPort = json.listenPort;
                    dm.saved = false;
                    console.log("found domain updated: " + JSON.stringify(dm));
                    dm.save(function (savErr) {
                        if (savErr) {
                            console.error("domain update error: " + savErr);
                            callback(returnVal);
                        } else {
                            if (json.domains && json.domains.length > 0) {
                                var ServerName = db.getServerName();
                                ServerName.find({domain: json.id}, function (srvErr, serverResults) {
                                    if (!srvErr && serverResults) {
                                        console.log("found server names in update: " + JSON.stringify(serverResults));
                                        for (var cnt = 0; cnt < serverResults; cnt++) {
                                            //delete the domains and start again.
                                            serverResults[cnt].remove();
                                        }
                                        var srvJson = {};
                                        srvJson.domainName = json.domains[0];
                                        srvJson.domain = dm;
                                        var ServerName = db.getServerName();
                                        var srv = new ServerName(srvJson);
                                        srv.save(function (srvSaveErr) {
                                            if (srvSaveErr) {
                                                returnVal.message = "server name save failed";
                                                console.error("save server error: " + srvSaveErr);
                                                callback(returnVal);
                                            } else {
                                                if (json.domains.length > 1) {
                                                    var srvJson2 = {};
                                                    srvJson2.domainName = json.domains[1];
                                                    srvJson2.domain = dm;
                                                    var srv2 = new ServerName(srvJson2);
                                                    srv2.save(function (srv2SaveErr) {
                                                        if (srv2SaveErr) {
                                                            returnVal.message = "server name save failed";
                                                            console.error("server name save error: " + srv2SaveErr);
                                                            callback(returnVal);
                                                        } else {
                                                            if (json.ssl) {
                                                                updateSsl(json, dm, function (success) {
                                                                    if (!success) {
                                                                        returnVal.message = "ssl save failed";
                                                                        callback(returnVal);
                                                                    } else {
                                                                        returnVal.success = true;
                                                                        nginxProcessor.setNginxRestart();
                                                                        callback(returnVal);
                                                                    }
                                                                });
                                                            } else {
                                                                deleteSsl(dm);
                                                                returnVal.success = true;
                                                                nginxProcessor.setNginxRestart();
                                                                callback(returnVal);
                                                            }
                                                        }
                                                    });
                                                } else if (json.ssl) {
                                                    updateSsl(json, dm, function (success) {
                                                        if (!success) {
                                                            returnVal.message = "ssl save failed";
                                                            callback(returnVal);
                                                        } else {
                                                            returnVal.success = true;
                                                            nginxProcessor.setNginxRestart();
                                                            callback(returnVal);
                                                        }
                                                    });
                                                } else {
                                                    deleteSsl(dm);
                                                    returnVal.success = true;
                                                    nginxProcessor.setNginxRestart();
                                                    callback(returnVal);
                                                }
                                            }
                                        });

                                    } else {
                                        console.error("server name find error: " + srvErr);
                                        returnVal.message = "failed to find server names";
                                        callback(returnVal);
                                    }
                                });
                            } else {
                                if (json.ssl) {
                                    updateSsl(json, dm, function (success) {
                                        if (!success) {
                                            returnVal.message = "ssl update failed";
                                            callback(returnVal);
                                        } else {
                                            returnVal.success = true;
                                            nginxProcessor.setNginxRestart();
                                            callback(returnVal);
                                        }
                                    });
                                } else {
                                    deleteSsl(dm);
                                    returnVal.success = true;
                                    nginxProcessor.setNginxRestart();
                                    callback(returnVal);
                                }
                            }
                        }
                    });
                } else {
                    console.error("find domain in update error: " + err);
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
exports.getDomain = function (id, callback) {
    var isOk = manager.securityCheck(id);
    if (isOk) {
        var Domain = db.getDomain();
        Domain.findById(id, function (err, results) {
            if (!err && results) {
                console.log("found domain in get: " + JSON.stringify(results));
                var d = results.toObject();
                var ServerName = db.getServerName();
                ServerName.find({domain: results._id}, function (srvErr, serverResults) {
                    if (!srvErr && serverResults) {
                        console.log("found server names in get: " + JSON.stringify(serverResults));
                        d.domains = serverResults;
                        var Ssl = db.getSsl();
                        Ssl.findOne({domain: results._id}, function (sslErr, sslResults) {
                            if (!sslErr && sslResults) {
                                console.log("found ssl in get: " + JSON.stringify(sslResults));
                                d.ssl = sslResults;
                            } else if (sslErr) {
                                console.error("found ssl in get error: " + sslErr);
                            }
                            callback(d);
                        });
                    } else {
                        console.error("found server in get error: " + srvErr);
                        callback({});
                    }
                });
            } else {
                console.error("found domain in get error: " + err);
                callback({});
            }
        });
    } else {
        callback({});
    }
};
exports.deleteDomain = function (id, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(id);
    if (isOk) {
        var Domain = db.getDomain();
        Domain.findById(id, function (err, results) {
            if (!err && results) {
                console.log("found domain in delete: " + JSON.stringify(results));
                results.remove();
                var ServerName = db.getServerName();
                ServerName.find({domain: id}, function (srvErr, serverResults) {
                    if (!srvErr && serverResults) {
                        console.log("found server names in delete: " + JSON.stringify(serverResults));
                        for (var cnt = 0; cnt < serverResults.length; cnt++) {
                            serverResults[cnt].remove();
                        }
                        var Ssl = db.getSsl();
                        Ssl.findOne({domain: results._id}, function (sslErr, sslResults) {
                            if (!sslErr && sslResults) {
                                console.log("found ssl in delete: " + JSON.stringify(sslResults));
                                sslResults.remove();
                            } else if (sslErr) {
                                console.error("found ssl in delete error: " + sslErr);
                            }
                            returnVal.success = true;
                            nginxProcessor.setNginxRestart();
                            callback(returnVal);
                        });
                    } else {
                        console.error("found server in get error: " + srvErr);
                        callback(returnVal);
                    }
                });
            } else {
                console.error("found domain in get error: " + err);
                callback(returnVal);
            }
        });
    } else {
        callback(returnVal);
    }
};

var saveSsl = function (json, dom, callback) {
    var sslJson = {};
    if (json.ssl.listenPort) {
        sslJson.listenPort = json.ssl.listenPort;
        sslJson.sslCertificate = json.ssl.sslCertificate;
        sslJson.sslCertificateKey = json.ssl.sslCertificateKey;
        sslJson.domain = dom;
        var Ssl = db.getSsl();
        var ssl = new Ssl(sslJson);
        ssl.save(function (err) {
            if (err) {
                console.error("ssl save error: " + err);
                callback(false);
            } else {
                callback(true);
            }
        });
    } else {
        callback(true);
    }

};


var updateSsl = function (json, dom, callback) {
    console.log("json passed to update ssl: " + json);
    if (json.ssl._id) {
        var Ssl = db.getSsl();
        if (json.ssl.listenPort && json.ssl.sslCertificate && json.ssl.sslCertificateKey) {            
            Ssl.findById(json.ssl._id, function (sslErr, sslResults) {
                if (!sslErr && sslResults) {
                    console.log("found ssl in update: " + sslResults);
                    var ssl = sslResults;
                    ssl.listenPort = json.ssl.listenPort;
                    ssl.sslCertificate = json.ssl.sslCertificate;
                    ssl.sslCertificateKey = json.ssl.sslCertificateKey;
                    ssl.save(function (err) {
                        if (err) {
                            console.error("ssl update error: " + err);
                            callback(false);
                        } else {
                            callback(true);
                        }
                    });
                } else {
                    console.error("ssl find in update error: " + sslErr);
                    callback(false);
                }
            });
        }else{
            deleteSsl(dom);
            callback(true);
        }
    } else if (json.ssl.listenPort && json.ssl.sslCertificate && json.ssl.sslCertificateKey) {
        saveSsl(json, dom, callback);
    } else {
        callback(true);
    }

};


var deleteSsl = function (dom) {
    console.log("deleting ssl");
    var Ssl = db.getSsl();
    Ssl.findOne({domain: dom._id}, function (sslErr, sslResults) {
        if (!sslErr && sslResults) {
            console.log("found ssl in update: " + sslResults);
            sslResults.remove();
        } else {
            console.error("ssl find in delete ssl error: " + sslErr);
        }
    });
};

