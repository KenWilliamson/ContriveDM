System.register(['@angular/core/testing', '../../../menu/services/menu-service'], function(exports_1) {
    var testing_1, menu_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MenuService', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        menu_service_1.MenuService
                    ];
                });
                testing_1.it('should set clear menu', testing_1.inject([menu_service_1.MenuService], function (ms) {
                    ms.setClearMenu();
                    testing_1.expect(ms.isMenuClear()).toEqual(true);
                    ms.removeClearMenu();
                    testing_1.expect(ms.isMenuClear()).toEqual(false);
                }));
            });
        }
    }
});
//# sourceMappingURL=menuServiceSpec.js.map