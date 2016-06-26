System.register(['@angular/core/testing', '@angular/core', '@angular/http/testing', '@angular/http', '../../../editUser/services/edit-user.service'], function(exports_1) {
    var testing_1, core_1, testing_2, http_1, edit_user_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (edit_user_service_1_1) {
                edit_user_service_1 = edit_user_service_1_1;
            }],
        execute: function() {
            testing_1.describe('EditUserService', function () {
                var testResponse = {
                    "id": "56f6e9104a7cff801736a09f",
                    "userName": "Tester",
                    "firstName": "Tester",
                    "lastName": "Tester"
                };
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        edit_user_service_1.EditUserService
                    ];
                });
                testing_1.it('should get user', testing_1.inject([http_1.XHRBackend, edit_user_service_1.EditUserService], function (mockBackend, service) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testResponse
                        })));
                    });
                    service.getUser("123").subscribe(function (user) {
                        testing_1.expect(user.userName).toBe("Tester");
                        testing_1.expect(user.firstName).toBe("Tester");
                        testing_1.expect(user.lastName).toBe("Tester");
                    });
                }));
                testing_1.it('should get user async', testing_1.injectAsync([http_1.XHRBackend, edit_user_service_1.EditUserService], function (mockBackend, service) {
                    return new Promise(function (pass, fail) {
                        mockBackend.connections.subscribe(function (connection) {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: testResponse
                            })));
                        });
                        service.getUser("123").subscribe(function (user) {
                            testing_1.expect(user.userName).toBe("Tester");
                            testing_1.expect(user.firstName).toBe("Tester");
                            testing_1.expect(user.lastName).toBe("Tester");
                            pass();
                        });
                    });
                }));
                testing_1.it('should update user', testing_1.inject([http_1.XHRBackend, edit_user_service_1.EditUserService], function (mockBackend, service) {
                    var testRes = {
                        success: true,
                        message: "success"
                    };
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testRes
                        })));
                    });
                    var req = {};
                    req.password = "test";
                    service.updateUser(req).subscribe(function (res) {
                        testing_1.expect(res.success).toBe(true);
                        testing_1.expect(res.message).toBe("success");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=edit-user.serviceSpec.js.map