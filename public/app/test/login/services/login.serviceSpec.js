System.register(['angular2/testing', 'angular2/core', 'angular2/http/testing', 'angular2/http', '../../../login/services/login.service'], function(exports_1) {
    var testing_1, core_1, testing_2, http_1, login_service_1;
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
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            testing_1.describe('LoginService', function () {
                var testResponse = {
                    success: true,
                    message: "logged in"
                };
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        login_service_1.LoginService
                    ];
                });
                testing_1.it('should login', testing_1.inject([http_1.XHRBackend, login_service_1.LoginService], function (mockBackend, service) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testResponse
                        })));
                    });
                    var req = {};
                    req.username = "test";
                    req.password = "test";
                    service.login(req).subscribe(function (res) {
                        testing_1.expect(res.success).toBe(true);
                        testing_1.expect(res.message).toBe("logged in");
                    });
                }));
                testing_1.it('should should login async', testing_1.injectAsync([http_1.XHRBackend, login_service_1.LoginService], function (mockBackend, service) {
                    return new Promise(function (pass, fail) {
                        mockBackend.connections.subscribe(function (connection) {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: testResponse
                            })));
                        });
                        service.login().subscribe(function (res) {
                            testing_1.expect(res.success).toBe(true);
                            testing_1.expect(res.message).toBe("logged in");
                            pass();
                        });
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=login.serviceSpec.js.map