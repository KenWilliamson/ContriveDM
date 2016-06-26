System.register(['@angular/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/edit-user.service', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, edit_user_service_1, router_deprecated_1;
    var EditUserComponent;
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
            function (edit_user_service_1_1) {
                edit_user_service_1 = edit_user_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            EditUserComponent = (function () {
                function EditUserComponent(_creds, _router, _editUserService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._editUserService = _editUserService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Edit User';
                    this.submitted = false;
                    this.active = false;
                }
                ;
                EditUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._menuService.setClearMenu();
                        var id = this._routeParams.get('id');
                        this._editUserService.getUser(id)
                            .subscribe(function (res) { return _this.success(res); }, function (error) { return _this.error(error); });
                    }
                };
                EditUserComponent.prototype.getTitle = function () {
                    return this.title;
                };
                EditUserComponent.prototype.success = function (res) {
                    this.user = res;
                    this.user.id = res._id;
                    delete this.user._id;
                    this.active = true;
                    console.log("Res in edit-user: " + JSON.stringify(this.user));
                };
                EditUserComponent.prototype.error = function (err) {
                    console.log("Edit User service error: " + err);
                };
                EditUserComponent.prototype.onSubmit = function () {
                    console.log("Res in edit-user submit: " + JSON.stringify(this.user));
                    this.processSubmittedData();
                };
                EditUserComponent.prototype.processSubmittedData = function () {
                    var _this = this;
                    if (!this.submitted) {
                        console.log("Res in edit-user submit: " + JSON.stringify(this.domain));
                        if (this.user.password === this.user.confirm) {
                            this._editUserService.updateUser(this.user)
                                .subscribe(function (res) { return _this.submitSuccess(res); }, function (error) { return _this.error(error); });
                        }
                        else {
                            this.errorMessage = "Password Match";
                        }
                    }
                };
                EditUserComponent.prototype.submitSuccess = function (res) {
                    if (res.success) {
                        this.submitted = true;
                        if (this.user.password && this.user.password !== "") {
                            var credUsername = this._creds.getUsername();
                            if (this.user.username === credUsername) {
                                this._creds.setCreds(this.user.username, this.user.password);
                            }
                        }
                        this.errorMessage = "";
                        this._router.navigate(['Users']);
                    }
                    else {
                        this.errorMessage = "Update Failed";
                    }
                };
                EditUserComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-user',
                        templateUrl: "../templates/editUser.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            edit_user_service_1.EditUserService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_deprecated_1.Router, edit_user_service_1.EditUserService, router_deprecated_1.RouteParams, menu_service_1.MenuService])
                ], EditUserComponent);
                return EditUserComponent;
            })();
            exports_1("EditUserComponent", EditUserComponent);
        }
    }
});
//# sourceMappingURL=edit-user.component.js.map