System.register(['angular2/core', '../business/credentials/credentials', './services/delete-domain.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, delete_domain_service_1, router_1;
    var DeleteDomainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            },
            function (delete_domain_service_1_1) {
                delete_domain_service_1 = delete_domain_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DeleteDomainComponent = (function () {
                function DeleteDomainComponent(_creds, _router, _deleteDomainService, _routeParams) {
                    this._creds = _creds;
                    this._router = _router;
                    this._deleteDomainService = _deleteDomainService;
                    this._routeParams = _routeParams;
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
                    this.domain.id = res._id;
                    delete this.domain._id;
                    console.log("Res in edit-domain: " + JSON.stringify(this.domain));
                };
                DeleteDomainComponent.prototype.error = function (err) {
                    console.log("Edit Domain service error: " + err);
                };
                DeleteDomainComponent = __decorate([
                    core_1.Component({
                        selector: 'delete-domain',
                        templateUrl: "../templates/deleteDomain.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            delete_domain_service_1.DeleteDomainService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_1.Router, delete_domain_service_1.DeleteDomainService, router_1.RouteParams])
                ], DeleteDomainComponent);
                return DeleteDomainComponent;
            })();
            exports_1("DeleteDomainComponent", DeleteDomainComponent);
        }
    }
});
//# sourceMappingURL=delete-domain.component.js.map