var service = require("../services/service");
var domainManager = require("../managers/DomainManager");
var domainListManager = require("../managers/DomainListManager");
exports.create = function(req, res) {
    if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, function(creds) {
            console.log("in auth callback");
            domainManager.addDomain(reqBody, function(result) {
                res.send(result);
            });
        });
    } else {
        res.status(415);
        res.send({success: false});
    }
};

exports.update = function(req, res) {
    if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, function(creds) {
            console.log("in auth callback");
            domainManager.updateDomain(reqBody, function(result) {
                res.send(result);
            });
        });
    } else {
        res.status(415);
        res.send({success: false});
    }
};

exports.get = function (req, res) {
    authenticate(req, res, function () {
        console.log("in auth callback");
        var id = req.params.id;
        if (id !== null && id !== undefined) {
            domainManager.getDomain(id, function (result) {
                res.send(result);
            });
        } else {
            res.send({});
        }

    });
};

exports.delete = function (req, res) {
    service.authenticate(req, res, function (creds) {
        console.log("in auth callback");
        var id = req.params.id;
        if (id !== null && id !== undefined) {
            domainManager.deleteDomain(id, function (result) {
                res.send(result);
            });
        } else {
            res.send({success: false});
        }

    });
};

exports.list = function (req, res) {
    authenticate(req, res, function () {
        console.log("in auth callback");
        domainListManager.domainList(function (result) {
            res.send(result);
        });
    });
};
