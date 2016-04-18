System.register(['angular2/core', 'angular2/router', '../business/credentials/credentials'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, credentials_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(_creds) {
                    this._creds = _creds;
                    this.title = 'menu';
                    this.domainActive = "color: white;";
                    this.addActive = "";
                }
                ;
                MenuComponent.prototype.ngOnInit = function () {
                    console.log("in menu init");
                };
                MenuComponent.prototype.getTitle = function () {
                    return this.title;
                };
                MenuComponent.prototype.setShow = function (show) {
                    console.log("showMenu:" + this.showMenu);
                    console.log("in setShow:" + show);
                    this.showMenu = show;
                    console.log("showMenu:" + this.showMenu);
                };
                MenuComponent.prototype.getShow = function () {
                    return this.showMenu;
                };
                MenuComponent.prototype.setDomainActive = function () {
                    this.domainActive = "color: white;";
                    this.addActive = "";
                };
                MenuComponent.prototype.setAddActive = function () {
                    this.domainActive = "";
                    this.addActive = "active";
                };
                MenuComponent.prototype.ngAfterContentChecked = function () {
                    console.log("in ngAfterContentChecked");
                    this.showMenu = this._creds.checkCreds();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MenuComponent.prototype, "showMenu", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Boolean]), 
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
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-main',
                        templateUrl: "../../templates/menus/menu.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            credentials_1.Credentials
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map