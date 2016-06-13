System.register(['@angular/core/testing', '../../logout/logout.component'], function(exports_1) {
    var testing_1, logout_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            }],
        execute: function() {
            testing_1.describe('LogoutComponent', function () {
                testing_1.it('is not undefined', function () {
                    var logoutComp = new logout_component_1.LogoutComponent();
                    testing_1.expect(logoutComp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var logoutComp = new logout_component_1.LogoutComponent();
                    testing_1.expect(logoutComp.getTitle()).toEqual("Logout");
                });
            });
        }
    }
});
//# sourceMappingURL=login.componentSpec.js.map