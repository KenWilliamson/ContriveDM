System.register(['angular2/testing', '../../editDomain/edit-domain.component'], function(exports_1) {
    var testing_1, edit_domain_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (edit_domain_component_1_1) {
                edit_domain_component_1 = edit_domain_component_1_1;
            }],
        execute: function() {
            testing_1.describe('EditDomainComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new edit_domain_component_1.EditDomainComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new edit_domain_component_1.EditDomainComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Edit Domain");
                });
            });
        }
    }
});
//# sourceMappingURL=edit-domain.componentSpec.js.map