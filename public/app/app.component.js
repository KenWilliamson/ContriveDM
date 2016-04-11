System.register(['angular2/core', './menu/menu.component', './domains/domain-list.component', './addDomain/add-domain.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, menu_component_1, domain_list_component_1, add_domain_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (domain_list_component_1_1) {
                domain_list_component_1 = domain_list_component_1_1;
            },
            function (add_domain_component_1_1) {
                add_domain_component_1 = add_domain_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'ContriveDM';
                }
                AppComponent.prototype.getTitle = function () {
                    return this.title;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'contrive-app',
                        templateUrl: "../templates/main.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            menu_component_1.MenuComponent
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Domains',
                            component: domain_list_component_1.DomainListComponent
                        },
                        {
                            path: '/add',
                            name: 'AddDomain',
                            component: add_domain_component_1.AddDomainComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map