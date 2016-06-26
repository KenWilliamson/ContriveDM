System.register(['@angular/core/testing', '../../editUser/edit-user.component'], function(exports_1) {
    var testing_1, edit_user_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (edit_user_component_1_1) {
                edit_user_component_1 = edit_user_component_1_1;
            }],
        execute: function() {
            testing_1.describe('EditUserComponent', function () {
                testing_1.it('is not undefined', function () {
                    var comp = new edit_user_component_1.EditUserComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new edit_user_component_1.EditUserComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Edit User");
                });
            });
        }
    }
});
//# sourceMappingURL=edit-user.componentSpec.js.map