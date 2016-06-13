System.register(['@angular/core/testing', '../../login/login.component'], function(exports_1) {
    var testing_1, login_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            testing_1.describe('LoginComponent', function () {
                testing_1.it('is not undefined', function () {
                    var loginComp = new login_component_1.LoginComponent();
                    testing_1.expect(loginComp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var loginComp = new login_component_1.LoginComponent();
                    testing_1.expect(loginComp.getTitle()).toEqual("Login");
                });
            });
        }
    }
});
//# sourceMappingURL=login.componentSpec.js.map