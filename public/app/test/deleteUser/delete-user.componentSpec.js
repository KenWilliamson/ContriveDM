System.register(['@angular/core/testing', '../../deleteUser/delete-user.component'], function(exports_1) {
    var testing_1, delete_user_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (delete_user_component_1_1) {
                delete_user_component_1 = delete_user_component_1_1;
            }],
        execute: function() {
            testing_1.describe('DeleteUserComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new delete_user_component_1.DeleteUserComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new delete_user_component_1.DeleteUserComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Delete User");
                });
            });
        }
    }
});
//# sourceMappingURL=delete-user.componentSpec.js.map