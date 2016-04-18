System.register(['angular2/core', '../menu/menu.component', '../business/credentials/credentials', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, menu_component_1, credentials_1, router_1;
    var DomainListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DomainListComponent = (function () {
                function DomainListComponent(_creds, _router) {
                    this._creds = _creds;
                    this._router = _router;
                    this.title = 'Domains';
                }
                ;
                DomainListComponent.prototype.ngOnInit = function () {
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                };
                DomainListComponent.prototype.getTitle = function () {
                    return this.title;
                };
                DomainListComponent = __decorate([
                    core_1.Component({
                        selector: 'domain-list',
                        templateUrl: "../templates/domains.html",
                        providers: [
                            credentials_1.Credentials,
                            menu_component_1.MenuComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_1.Router])
                ], DomainListComponent);
                return DomainListComponent;
            })();
            exports_1("DomainListComponent", DomainListComponent);
        }
    }
});
//# sourceMappingURL=domain-list.component.js.map