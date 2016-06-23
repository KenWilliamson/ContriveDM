System.register(['@angular/core', './services/menu-service', '@angular/router-deprecated', '../business/credentials/credentials'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, menu_service_1, router_deprecated_1, credentials_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(_creds, _menuService) {
                    this._creds = _creds;
                    this._menuService = _menuService;
                    this.title = 'Menu';
                    this.domainActive = "color: white;";
                    this.addActive = "";
                    this.usersActive = "";
                }
                ;
                MenuComponent.prototype.getTitle = function () {
                    return this.title;
                };
                MenuComponent.prototype.setShow = function (show) {
                    this.showMenu = show;
                };
                MenuComponent.prototype.getShow = function () {
                    return this.showMenu;
                };
                MenuComponent.prototype.setDomainActive = function () {
                    this.domainActive = "color: white;";
                    this.addActive = "";
                    this.usersActive = "";
                    this.clearMenu = false;
                };
                MenuComponent.prototype.setAddActive = function () {
                    this.domainActive = "";
                    this.addActive = "active";
                    this.usersActive = "";
                    this.clearMenu = false;
                };
                MenuComponent.prototype.setUsersActive = function () {
                    this.domainActive = "";
                    this.addActive = "";
                    this.usersActive = "active";
                    this.clearMenu = false;
                };
                MenuComponent.prototype.getDomainActive = function () {
                    var rtn = "";
                    if (!this.clearMenu) {
                        rtn = this.domainActive;
                    }
                    return rtn;
                };
                MenuComponent.prototype.ngAfterContentChecked = function () {
                    this.showMenu = this._creds.checkCreds();
                    if (this._menuService.isMenuClear()) {
                        this.domainActive = "";
                    }
                    else if (this.addActive !== "active" && this.usersActive !== "active") {
                        this.domainActive = "color: white;";
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MenuComponent.prototype, "showMenu", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], MenuComponent.prototype, "setShow", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], MenuComponent.prototype, "setDomainActive", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], MenuComponent.prototype, "setAddActive", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], MenuComponent.prototype, "setUsersActive", null);
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-main',
                        templateUrl: "../../templates/menus/menu.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, menu_service_1.MenuService])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map