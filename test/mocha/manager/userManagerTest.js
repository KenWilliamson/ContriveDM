var assert = require('assert');
var db = require("../../../db/db");
var userManager = require("../../../managers/UserManager");
describe('UserManager', function () {
    describe('#addUser()', function () {
        it('should add, find, update, and delete a user', function (done) {
            var u = {};
            u.username = "tester1";
            u.password = "tester1";
            u.firstName = "tester";
            u.lastName = "one";
            //add user
            userManager.addUser(u, function (res) {
                if (res.success) {
                    var User = db.getUser();
                    User.findOne({username: "tester1"}, function (uErr, userRes) {
                        if (!uErr && userRes) {
                            var uid = userRes._id;
                            //find user
                            userManager.getUser(uid, function (u1Res) {
                                if (u1Res && u1Res.username === "tester1") {
                                    //update user
                                    var uToUpdate = {};
                                    uToUpdate.id = uid;
                                    uToUpdate.password = "test";
                                    uToUpdate.firstName = "tst";
                                    userManager.updateUser(uToUpdate, function (updateRes) {
                                        if (updateRes.success) {
                                            //delete user
                                            userManager.deleteUser(uid, function (delRes) {
                                                if (delRes.success) {
                                                    assert(true);
                                                    done();
                                                } else {
                                                    assert(false);
                                                }
                                            });
                                        } else {
                                            assert(false);
                                        }
                                    });
                                } else {
                                    assert(false);
                                }
                            });
                        } else {
                            assert(false);
                        }
                    });
                } else {
                    assert(false);
                }
            });
        });
    });

    describe('#userList()', function () {
        it('should return a list of users', function (done) {           
            userManager.userList(function (res) {
                if (res && res.length > 0) {
                    assert(true);
                    done();
                } else {
                    assert(false);
                }
            });
        });
    });

});