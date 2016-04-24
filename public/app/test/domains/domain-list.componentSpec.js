System.register(['angular2/testing', '../../domains/domain-list.component'], function(exports_1) {
    var testing_1, domain_list_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (domain_list_component_1_1) {
                domain_list_component_1 = domain_list_component_1_1;
            }],
        execute: function() {
            testing_1.describe('DomainListComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new domain_list_component_1.DomainListComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new domain_list_component_1.DomainListComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Domains");
                });
            });
        }
    }
});
//# sourceMappingURL=domain-list.componentSpec.js.map