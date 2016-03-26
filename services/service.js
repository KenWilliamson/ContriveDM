var db = require("../db/db");
var manager = require("../managers/manager");
authenticate = function (req, res, callback) {
    console.log("in auth");
    var callbackUserCreds = {
        "id": "",
        "username": "",
        "logginSuccess": false
    };
    var token = req.header("authorization");
    //console.log("token:" + token);
    if (token !== undefined && token !== null) {
        var tokenArray = token.split(' ');
        //console.log("tokenArray:" + tokenArray);
        if (tokenArray !== undefined && tokenArray !== null && tokenArray.length === 2) {
            var clearText = new Buffer(tokenArray[1], 'base64').toString();
            //console.log("clear text:" + clearText);
            var credentials = clearText.split(':');
            var User = db.getUser();
            User.findOne({username: credentials[0]}, function (err, results) {
                //console.log("found user in auth:" + results);                
                if (!err && results !== undefined && results !== null) {
                    var foundUser = results.toObject();
                    if (foundUser.password === manager.hashPasswordSync(credentials[0], credentials[1])) {
                        console.log("correct password: " + "true");
                        callbackUserCreds.logginSuccess = true;
                        callbackUserCreds.id = foundUser._id;
                        callbackUserCreds.username = foundUser.username;
                        callback(callbackUserCreds);
                    } else {
                        console.log("correct password: " + "false");
                        res.status(401);
                        res.send();
                    }

                } else {
                    console.log("correct username: " + "false");
                    res.status(401);
                    res.send();
                }
            });
        } else {
            console.log("correct username: " + "false");
            res.status(401);
            res.send();
        }
    } else {
        console.log("correct username: " + "false");
        res.status(401);
        res.send();
    }
};

exports.authenticate = authenticate;