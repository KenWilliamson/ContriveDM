System.register(['@angular/core/testing', '@angular/core', '@angular/http/testing', '@angular/http', '../../../pushDomains/services/push-domains.service'], function(exports_1) {
    var testing_1, core_1, testing_2, http_1, push_domains_service_1;
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
            function (push_domains_service_1_1) {
                push_domains_service_1 = push_domains_service_1_1;
            }],
        execute: function() {
            testing_1.describe('PushDomainsService', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        push_domains_service_1.PushDomainsService
                    ];
                });
                testing_1.it('should upsh domains', testing_1.inject([http_1.XHRBackend, push_domains_service_1.PushDomainsService], function (mockBackend, service) {
                    var testRes = {
                        success: true,
                        message: "success"
                    };
                    mockBackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                            body: testRes
                        })));
                    });
                    service.pushDomains().subscribe(function (res) {
                        testing_1.expect(res.success).toBe(true);
                        testing_1.expect(res.message).toBe("success");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=push-domains.serviceSpec.js.map