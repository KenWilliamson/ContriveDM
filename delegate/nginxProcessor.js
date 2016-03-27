var db = require("../db/db");
exports.setNginxRestart = function (callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var Nginx = db.getNginx();
    Nginx.find({}, function (err, results) {
        if (!err && results && results.length === 0) {
            var json = {};
            json.needsRestart = true;
            var ng = new Nginx(json);
            ng.save(function (saveErr) {
                if (saveErr) {
                    returnVal.message = "nginx save failed";
                    console.error("save error: " + saveErr);
                } else {
                    returnVal.success = true;
                }
                if (callback) {
                    callback(returnVal);
                }
            });
        } else if (err) {
            console.error("read nginx error: " + err);
            if (callback) {
                callback(returnVal);
            }
        } else {
            returnVal.success = true;
            if (callback) {
                callback(returnVal);
            }
        }
    });
};

exports.getIginxRestart = function (callback) {
    var Nginx = db.getNginx();
    var returnVal = false;
    Nginx.find({}, function (err, results) {
        if (!err && results) {
            for (var cnt = 0; cnt < results.length; cnt++) {
                if (results[cnt].needsRestart) {
                    returnVal = true;
                    break;
                }
            }
            callback(returnVal);
        } else {
            console.error("read nginx error: " + err);
            callback(returnVal);
        }
    });
};


exports.clearNginxRestart = function (callback) {
    var returnVal = {
        success: false,
        message: ""
    };
    var Nginx = db.getNginx();
    Nginx.find({}, function (err, results) {
        if (!err && results) {
            for (var cnt = 0; cnt < results.length; cnt++) {
                results[cnt].remove();
            }
            returnVal.success = true;
            if (callback) {
                callback(returnVal);
            }
        } else {
            console.error("read nginx list error in clear: " + err);
            returnVal.message = "read nginx list error";
            if (callback) {
                callback(returnVal);
            }
        }
    });
};