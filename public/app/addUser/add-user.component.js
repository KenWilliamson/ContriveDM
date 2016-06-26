System.register(['@angular/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/add-user.service', '../domainObjects/user', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, add_user_service_1, user_1, router_deprecated_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (add_user_service_1_1) {
                add_user_service_1 = add_user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                function AddUserComponent(_creds, _router, _addUserService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._addUserService = _addUserService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Add User';
                    this.submitted = false;
                    this.active = false;
                }
                ;
                AddUserComponent.prototype.ngOnInit = function () {
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._menuService.setClearMenu();
                        this.user = new user_1.User();
                        this.active = true;
                    }
                };
                AddUserComponent.prototype.getTitle = function () {
                    return this.title;
                };
                AddUserComponent.prototype.onSubmit = function () {
                    console.log("Res in add-user submit: " + JSON.stringify(this.user));
                    this.processSubmittedData();
                };
                AddUserComponent.prototype.processSubmittedData = function () {
                    var _this = this;
                    if (!this.submitted) {
                        console.log("Res in add-user submit: " + JSON.stringify(this.user));
                        if (this.user.password === this.user.confirm) {
                            this._addUserService.addUser(this.user)
                                .subscribe(function (res) { return _this.submitSuccess(res); }, function (error) { return _this.error(error); });
                        }
                        else {
                            this.errorMessage = "Password Match";
                        }
                    }
                };
                AddUserComponent.prototype.submitSuccess = function (res) {
                    if (res.success) {
                        this.submitted = true;
                        this.errorMessage = "";
                        this._router.navigate(['Users']);
                    }
                    else {
                        this.errorMessage = "Update Failed";
                    }
                };
                AddUserComponent.prototype.error = function (err) {
                    console.log("Add User service error: " + err);
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        selector: 'user-add',
                        templateUrl: "../templates/addUser.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            add_user_service_1.AddUserService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_deprecated_1.Router, add_user_service_1.AddUserService, router_deprecated_1.RouteParams, menu_service_1.MenuService])
                ], AddUserComponent);
                return AddUserComponent;
            })();
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=add-user.component.js.map