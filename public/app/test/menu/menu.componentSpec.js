System.register(['@angular/core/testing', '../../menu/menu.component', '../../menu/services/menu-service', '../../business/credentials/credentials'], function(exports_1) {
    var testing_1, menu_component_1, menu_service_1, credentials_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            }],
        execute: function() {
            testing_1.describe('MenuComponent', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        credentials_1.Credentials,
                        menu_service_1.MenuService
                    ];
                });
                testing_1.it('is not undefined', function () {
                    var comp = new menu_component_1.MenuComponent();
                    testing_1.expect(comp).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var comp = new menu_component_1.MenuComponent();
                    testing_1.expect(comp.getTitle()).toEqual("Menu");
                });
                testing_1.it('should not set show', function () {
                    var comp = new menu_component_1.MenuComponent();
                    comp.setShow(true);
                    testing_1.expect(comp.getShow()).toEqual(true);
                });
                testing_1.it('should set show', testing_1.inject([credentials_1.Credentials, menu_service_1.MenuService], function (creds, ms) {
                    var comp = new menu_component_1.MenuComponent(creds, ms);
                    creds.setCreds("test", "test");
                    comp.ngAfterContentChecked();
                    testing_1.expect(comp.getShow()).toEqual(true);
                    creds.deleteCreds();
                }));
            });
        }
    }
});
//# sourceMappingURL=menu.componentSpec.js.map