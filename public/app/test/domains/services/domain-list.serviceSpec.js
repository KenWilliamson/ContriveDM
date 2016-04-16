System.register(['angular2/testing', 'angular2/core', 'angular2/http/testing', 'angular2/http', '../../../domains/services/domain-list.service'], function(exports_1) {
    var testing_1, core_1, testing_2, http_1, domain_list_service_1;
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
            function (domain_list_service_1_1) {
                domain_list_service_1 = domain_list_service_1_1;
            }],
        execute: function() {
            testing_1.describe('DomainListService', function () {
                var testResponse = [
                    {
                        domainName: "test one",
                        listenPort: 8080
                    },
                    {
                        domainName: "test two",
                        listenPort: 8090
                    }
                ];
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        domain_list_service_1.DomainListService
                    ];
                });
                testing_1.it('should get domains', testing_1.inject([http_1.XHRBackend, domain_list_service_1.DomainListService], function (mockBackend, service) {
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testResponse
                        })));
                    });
                    service.getDomainList().subscribe(function (domains) {
                        testing_1.expect(domains.length).toBe(2);
                        testing_1.expect(domains[0].domainName).toBe("test one");
                        testing_1.expect(domains[1].domainName).toBe("test two");
                    });
                }));
                testing_1.it('should get domains async', testing_1.injectAsync([http_1.XHRBackend, domain_list_service_1.DomainListService], function (mockBackend, service) {
                    return new Promise(function (pass, fail) {
                        mockBackend.connections.subscribe(function (connection) {
                            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                                body: testResponse
                            })));
                        });
                        service.getDomainList().subscribe(function (domains) {
                            testing_1.expect(domains.length).toBe(2);
                            testing_1.expect(domains[0].domainName).toBe("test one");
                            testing_1.expect(domains[1].domainName).toBe("test two");
                            pass();
                        });
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=domain-list.serviceSpec.js.map