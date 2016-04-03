var service = require("../services/service");
var userManager = require("../managers/UserManager");
exports.create = function (req, res) {
    if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, function (creds) {
            console.log("in auth callback");
            userManager.addUser(reqBody, function (result) {
                res.send(result);
            });
        });
    } else {
        res.status(415);
        res.send({success: false});
    }
};

exports.update = function (req, res) {
    if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, function (creds) {
            console.log("in auth callback");
            userManager.updateUser(reqBody, function (result) {
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
            userManager.getUser(id, function (result) {
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
            userManager.deleteUser(id, function (result) {
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
        userManager.userList(function (result) {
            res.send(result);
        });
    });
};


exports.login = function (req, res) {
    if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);        
        userManager.login(reqBody, function (result) {
            res.send(result);
        });
    } else {
        res.status(415);
        res.send({success: false});
    }
};