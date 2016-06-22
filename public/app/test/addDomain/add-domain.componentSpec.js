System.register(['@angular/core/testing', '../../addDomain/add-domain.component'], function(exports_1) {
    var testing_1, add_domain_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (add_domain_component_1_1) {
                add_domain_component_1 = add_domain_component_1_1;
            }],
        execute: function() {
            testing_1.describe('AddDomainComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new add_domain_component_1.AddDomainComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new add_domain_component_1.AddDomainComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Add Domain");
                });
            });
        }
    }
});
//# sourceMappingURL=add-domain.componentSpec.js.map