System.register(['@angular/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/delete-user.service', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, delete_user_service_1, router_deprecated_1;
    var DeleteUserComponent;
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
            function (delete_user_service_1_1) {
                delete_user_service_1 = delete_user_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            DeleteUserComponent = (function () {
                function DeleteUserComponent(_creds, _router, _deleteUserService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._deleteUserService = _deleteUserService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Delete User';
                    this.active = false;
                }
                ;
                DeleteUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._menuService.setClearMenu();
                        var id = this._routeParams.get('id');
                        this._deleteUserService.getUser(id)
                            .subscribe(function (res) { return _this.success(res); }, function (error) { return _this.error(error); });
                    }
                };
                DeleteUserComponent.prototype.getTitle = function () {
                    return this.title;
                };
                DeleteUserComponent.prototype.success = function (res) {
                    this.user = res;
                    this.active = true;
                    console.log("Res in delete-user: " + JSON.stringify(this.user));
                };
                DeleteUserComponent.prototype.onDeleteClicked = function () {
                    var _this = this;
                    console.log("Delete User");
                    this._deleteUserService.deleteUser(this.user._id)
                        .subscribe(function (res) { return _this.deleteSuccess(res); }, function (error) { return _this.error(error); });
                };
                DeleteUserComponent.prototype.onCancelClicked = function () {
                    this._router.navigate(['Users']);
                };
                DeleteUserComponent.prototype.deleteSuccess = function (res) {
                    if (res.success) {
                        this._router.navigate(['Users']);
                    }
                };
                DeleteUserComponent.prototype.error = function (err) {
                    console.log("Delete User service error: " + err);
                };
                DeleteUserComponent = __decorate([
                    core_1.Component({
                        selector: 'delete-user',
                        templateUrl: "../templates/deleteUser.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            delete_user_service_1.DeleteUserService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_deprecated_1.Router, delete_user_service_1.DeleteUserService, router_deprecated_1.RouteParams, menu_service_1.MenuService])
                ], DeleteUserComponent);
                return DeleteUserComponent;
            })();
            exports_1("DeleteUserComponent", DeleteUserComponent);
        }
    }
});
//# sourceMappingURL=delete-user.component.js.map