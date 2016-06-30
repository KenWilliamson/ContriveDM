System.register(['@angular/core', './business/credentials/credentials', './menu/menu.component', './menu/services/menu-service', './domains/domain-list.component', './users/user-list.component', './addDomain/add-domain.component', './addUser/add-user.component', './editDomain/edit-domain.component', './editUser/edit-user.component', './deleteDomain/delete-domain.component', './deleteUser/delete-user.component', './pushDomains/push-domains.component', './login/login.component', './logout/logout.component', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_component_1, menu_service_1, domain_list_component_1, user_list_component_1, add_domain_component_1, add_user_component_1, edit_domain_component_1, edit_user_component_1, delete_domain_component_1, delete_user_component_1, push_domains_component_1, login_component_1, logout_component_1, router_deprecated_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (domain_list_component_1_1) {
                domain_list_component_1 = domain_list_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (add_domain_component_1_1) {
                add_domain_component_1 = add_domain_component_1_1;
            },
            function (add_user_component_1_1) {
                add_user_component_1 = add_user_component_1_1;
            },
            function (edit_domain_component_1_1) {
                edit_domain_component_1 = edit_domain_component_1_1;
            },
            function (edit_user_component_1_1) {
                edit_user_component_1 = edit_user_component_1_1;
            },
            function (delete_domain_component_1_1) {
                delete_domain_component_1 = delete_domain_component_1_1;
            },
            function (delete_user_component_1_1) {
                delete_user_component_1 = delete_user_component_1_1;
            },
            function (push_domains_component_1_1) {
                push_domains_component_1 = push_domains_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_menuService, _creds) {
                    this._menuService = _menuService;
                    this._creds = _creds;
                    this.title = 'ContriveDM';
                }
                ;
                AppComponent.prototype.getTitle = function () {
                    return this.title;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'contrive-app',
                        templateUrl: "../templates/main.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES,
                            menu_component_1.MenuComponent
                        ],
                        providers: [
                            router_deprecated_1.ROUTER_PROVIDERS,
                            credentials_1.Credentials,
                            menu_service_1.MenuService
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Domains',
                            component: domain_list_component_1.DomainListComponent
                        },
                        {
                            path: '/add',
                            name: 'AddDomain',
                            component: add_domain_component_1.AddDomainComponent
                        },
                        {
                            path: '/editDomain/:id',
                            name: 'EditDomain',
                            component: edit_domain_component_1.EditDomainComponent
                        },
                        {
                            path: '/deleteDomain/:id',
                            name: 'DeleteDomain',
                            component: delete_domain_component_1.DeleteDomainComponent
                        },
                        {
                            path: '/users',
                            name: 'Users',
                            component: user_list_component_1.UserListComponent
                        },
                        {
                            path: '/adduser',
                            name: 'AddUser',
                            component: add_user_component_1.AddUserComponent
                        },
                        {
                            path: '/editUser/:id',
                            name: 'EditUser',
                            component: edit_user_component_1.EditUserComponent
                        },
                        {
                            path: '/deleteUser/:id',
                            name: 'DeleteUser',
                            component: delete_user_component_1.DeleteUserComponent
                        },
                        {
                            path: '/domains/push',
                            name: 'PushDomains',
                            component: push_domains_component_1.PushDomainsComponent
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent
                        },
                        {
                            path: '/logout',
                            name: 'Logout',
                            component: logout_component_1.LogoutComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, credentials_1.Credentials])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map