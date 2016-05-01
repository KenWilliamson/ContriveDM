System.register(['angular2/testing', '../../deleteDomain/delete-domain.component'], function(exports_1) {
    var testing_1, delete_domain_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (delete_domain_component_1_1) {
                delete_domain_component_1 = delete_domain_component_1_1;
            }],
        execute: function() {
            testing_1.describe('DeleteDomainComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new delete_domain_component_1.DeleteDomainComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new delete_domain_component_1.DeleteDomainComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Delete Domain");
                });
            });
        }
    }
});
//# sourceMappingURL=delete-domain.componentSpec.js.map