System.register(['angular2/testing', 'angular2/core', 'angular2/http/testing', 'angular2/http', '../../../editDomain/services/edit-domain.service'], function(exports_1) {
    var testing_1, core_1, testing_2, http_1, edit_domain_service_1;
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
            function (edit_domain_service_1_1) {
                edit_domain_service_1 = edit_domain_service_1_1;
            }],
        execute: function() {
            testing_1.describe('EditDomainService', function () {
                var testResponse = {
                    domainName: "test one",
                    listenPort: 8080
                };
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        edit_domain_service_1.EditDomainService
                    ];
                });
                testing_1.it('should get domain', testing_1.inject([http_1.XHRBackend, edit_domain_service_1.EditDomainService], function (mockBackend, service) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testResponse
                        })));
                    });
                    service.getDomain("123").subscribe(function (domain) {
                        testing_1.expect(domain.domainName).toBe("test one");
                        testing_1.expect(domain.listenPort).toBe(8080);
                    });
                }));
                testing_1.it('should get domain async', testing_1.injectAsync([http_1.XHRBackend, edit_domain_service_1.EditDomainService], function (mockBackend, service) {
                    return new Promise(function (pass, fail) {
                        mockBackend.connections.subscribe(function (connection) {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: testResponse
                            })));
                        });
                        service.getDomain("123").subscribe(function (domain) {
                            testing_1.expect(domain.domainName).toBe("test one");
                            testing_1.expect(domain.listenPort).toBe(8080);
                            pass();
                        });
                    });
                }));
                testing_1.it('should update domain', testing_1.inject([http_1.XHRBackend, edit_domain_service_1.EditDomainService], function (mockBackend, service) {
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
                    req.domainName = "test";
                    service.updateDomain(req).subscribe(function (res) {
                        testing_1.expect(res.success).toBe(true);
                        testing_1.expect(res.message).toBe("success");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=edit-domain.serviceSpec.js.map