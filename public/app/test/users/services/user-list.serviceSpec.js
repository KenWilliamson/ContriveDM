System.register(['@angular/core/testing', '@angular/core', '@angular/http/testing', '@angular/http', '../../../users/services/user-list.service'], function(exports_1) {
    var testing_1, core_1, testing_2, http_1, user_list_service_1;
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
            function (user_list_service_1_1) {
                user_list_service_1 = user_list_service_1_1;
            }],
        execute: function() {
            testing_1.describe('UserListService', function () {
                var testResponse = [
                    {
                        "id": "56f6e9104a7cff801736a09f",
                        "userName": "Tester",
                        "firstName": "Tester",
                        "lastName": "Tester"
                    },
                    {
                        "id": "555kghdfhfhf",
                        "userName": "Tester2",
                        "firstName": "Tester2",
                        "lastName": "Tester2"
                    }
                ];
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        user_list_service_1.UserListService
                    ];
                });
                testing_1.it('should get users', testing_1.inject([http_1.XHRBackend, user_list_service_1.UserListService], function (mockBackend, service) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testResponse
                        })));
                    });
                    service.getUserList().subscribe(function (users) {
                        testing_1.expect(users.length).toBe(2);
                        testing_1.expect(users[0].userName).toBe("Tester");
                        testing_1.expect(users[1].userName).toBe("Tester2");
                    });
                }));
                testing_1.it('should get users async', testing_1.injectAsync([http_1.XHRBackend, user_list_service_1.UserListService], function (mockBackend, service) {
                    return new Promise(function (pass, fail) {
                        mockBackend.connections.subscribe(function (connection) {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: testResponse
                            })));
                        });
                        service.getUserList().subscribe(function (users) {
                            testing_1.expect(users.length).toBe(2);
                            testing_1.expect(users[0].userName).toBe("Tester");
                            testing_1.expect(users[1].userName).toBe("Tester2");
                            pass();
                        });
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=user-list.serviceSpec.js.map