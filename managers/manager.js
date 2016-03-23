var crypto = require('crypto');


hashPasswordSync = function (username, pw) {
    console.log("in hashPasswordSync: username:" + username + " password:" + pw);
    console.log("typeof pw:" + typeof(pw));
    console.log("typeof username:" + typeof(username));
    return crypto.pbkdf2Sync(pw, username, 250, 128).toString('base64');
};

exports.hashPasswordSync = hashPasswordSync;


exports.hashPassword = function (username, pw, callback) {
    crypto.pbkdf2(pw, username, 250, 128, callback);
};