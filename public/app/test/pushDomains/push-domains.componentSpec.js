System.register(['@angular/core/testing', '../../pushDomains/push-domains.component'], function(exports_1) {
    var testing_1, push_domains_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (push_domains_component_1_1) {
                push_domains_component_1 = push_domains_component_1_1;
            }],
        execute: function() {
            testing_1.describe('PushDomainsComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new push_domains_component_1.PushDomainsComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new push_domains_component_1.PushDomainsComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Push Domains");
                });
            });
        }
    }
});
//# sourceMappingURL=push-domains.componentSpec.js.map