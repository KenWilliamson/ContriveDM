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
                // console.log("user to add" + JSON.stringify(userRecord));
                var u = new User(userRecord);
                u.save(function (saveErr) {
                    if (saveErr) {
                        console.error("user save error: " + saveErr);
                    } else {
                        returnVal.success = true;
                    }
                    //console.log("add user results" + JSON.stringify(returnVal));
                    callback(returnVal);
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
                var u = results;
                if (json.password) {
                    var hashedPw = manager.hashPasswordSync(results.username, json.password);
                    u.password = hashedPw;
                }
                if (json.firstName) {
                    u.firstName = json.firstName;
                }
                if (json.lastName) {
                    u.lastName = json.lastName;
                }
                u.save(function (saveErr) {
                    if (saveErr) {
                        console.error("user update error: " + saveErr);
                    } else {
                        returnVal.success = true;
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
                var u = {};
                u.id = results._id;
                u.username = results.username;
                u.firstName = results.firstName;
                u.lastName = results.lastName;
                callback(u);
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
        User.find({}, function (listErr, users) {
            if (!listErr && users.length > 1) {
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
                returnVal.message = "can't delete the last user"
                callback(returnVal);
            }
        });
    } else {
        callback(returnVal);
    }
};

exports.userList = function (callback) {
    var returnVal = [];
    var User = db.getUser();
    User.find({}, function (err, results) {
        if (err) {
            console.error("user find Error:" + err);
            callback(returnVal);
        } else {
            if (results) {
                for (var cnt = 0; cnt < results.length; cnt++) {
                    var u = {};
                    u.id = results[cnt]._id;
                    u.userName = results[cnt].username;
                    u.firstName = results[cnt].firstName;
                    u.lastName = results[cnt].lastName;
                    returnVal.push(u);
                }
            }
            callback(returnVal);
        }
    });
};

exports.login = function (json, callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var isOk = manager.securityCheck(json);
    if (isOk) {
        if (json.username && json.password) {
            var User = db.getUser();
            User.findOne({username: json.username}, function (err, results) {
                if (err || !results) {
                    console.error("user Error:" + err);
                    callback(returnVal);
                }else{
                    var hashedPw = manager.hashPasswordSync(json.username, json.password);
                    if(hashedPw === results.password){
                        returnVal.success = true;
                    }
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