var manager = require("./manager");
var db = require("../db/db");

exports.addUser = function (json, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(json);
    if (isOk) {
        var User = db.getUser();
        User.findOne({username: json.username}, function (err, results) {
            if (err) {
                console.error("user Error:" + err);
                callback(returnVal);
            } else if (!results) {
                var hashedPw = manager.hashPasswordSync(json.username, json.password);
                var userRecord = {
                    username: json.username,
                    password: hashedPw,
                    firstName: json.firstName,
                    lastName: json.lastName
                };
                var u = new User(userRecord);
                u.save(function (saveErr) {
                    if (saveErr) {
                        console.error("user save error: " + saveErr);
                    } else {
                        returnVal = true;
                        callback(returnVal);
                    }
                });
            } else {
                console.error("user exist Error:" + err);
                callback(returnVal);
            }
        });
    } else {
        callback(returnVal);
    }
};


exports.updateUser = function (json, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(json);
    if (isOk) {
        var User = db.getUser();
        User.findById(json.id, function (err, results) {
            if (err) {
                console.error("user find Error:" + err);
                callback(returnVal);
            } else if (results) {
                var hashedPw = manager.hashPasswordSync(results.username, json.password);
                var u = results;
                u.password = hashedPw;
                u.firstName = json.firstName;
                u.lastName = json.lastName;
                u.save(function (saveErr) {
                    if (saveErr) {
                        console.error("user update error: " + saveErr);
                    } else {
                        returnVal = true;
                        callback(returnVal);
                    }
                });
            } else {
                console.error("user find Error:" + err);
                callback(returnVal);
            }
        });
    } else {
        callback(returnVal);
    }
};


exports.getUser = function (id, callback) {
    var isOk = manager.securityCheck(id);
    if (isOk) {
        var User = db.getUser();
        User.findById(id, function (err, results) {
            if (err) {
                console.error("user find Error:" + err);
                callback({});
            } else if (results) {
                callback(results);
            } else {
                callback({});
            }
        });
    } else {
        callback({});
    }
};

exports.deleteUser = function (id, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(id);
    if (isOk) {
        var User = db.getUser();
        User.findById(id, function (err, results) {
            if (err) {
                console.error("user find Error:" + err);
                callback(returnVal);
            } else if (results) {
                results.remove();
                returnVal.success = true;
                callback(returnVal);
            } else {
                callback(returnVal);
            }
        });
    } else {
        callback(returnVal);
    }
};

exports.userList = function (callback) {

};