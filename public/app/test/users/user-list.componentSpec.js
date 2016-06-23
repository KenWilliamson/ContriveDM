System.register(['@angular/core/testing', '../../users/user-list.component'], function(exports_1) {
    var testing_1, user_list_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            }],
        execute: function() {
            testing_1.describe('UserListComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new user_list_component_1.UserListComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new user_list_component_1.UserListComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Users");
                });
            });
        }
    }
});
//# sourceMappingURL=user-list.componentSpec.js.map