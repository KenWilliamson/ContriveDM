System.register(['@angular/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/delete-domain.service', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, delete_domain_service_1, router_deprecated_1;
    var DeleteDomainComponent;
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
            function (delete_domain_service_1_1) {
                delete_domain_service_1 = delete_domain_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            DeleteDomainComponent = (function () {
                function DeleteDomainComponent(_creds, _router, _deleteDomainService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._deleteDomainService = _deleteDomainService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Delete Domain';
                }
                ;
                DeleteDomainComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._menuService.setClearMenu();
                        var id = this._routeParams.get('id');
                        this._deleteDomainService.getDomain(id)
                            .subscribe(function (res) { return _this.success(res); }, function (error) { return _this.error(error); });
                    }
                };
                DeleteDomainComponent.prototype.getTitle = function () {
                    return this.title;
                };
                DeleteDomainComponent.prototype.success = function (res) {
                    this.domain = res;
                    this.id = res._id;
                    this.domainName = this.domain.domainName;
                    this.ipAddress = this.domain.upstreamServerIp;
                    this.port = this.domain.listenPort;
                    console.log("Res in delete-domain: " + JSON.stringify(this.domain));
                };
                DeleteDomainComponent.prototype.error = function (err) {
                    console.log("Delete Domain service error: " + err);
                };
                DeleteDomainComponent.prototype.onDeleteClicked = function () {
                    console.log("Delete Domain");
                };
                DeleteDomainComponent.prototype.onCancelClicked = function () {
                    this._router.navigate(['Domains']);
                };
                DeleteDomainComponent = __decorate([
                    core_1.Component({
                        selector: 'delete-domain',
                        templateUrl: "../templates/deleteDomain.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            delete_domain_service_1.DeleteDomainService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_deprecated_1.Router, delete_domain_service_1.DeleteDomainService, router_deprecated_1.RouteParams, menu_service_1.MenuService])
                ], DeleteDomainComponent);
                return DeleteDomainComponent;
            })();
            exports_1("DeleteDomainComponent", DeleteDomainComponent);
        }
    }
});
//# sourceMappingURL=delete-domain.component.js.map