System.register(['@angular/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/add-domain.service', '../domainObjects/domain', '../domainObjects/ssl', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, add_domain_service_1, domain_1, ssl_1, router_deprecated_1;
    var AddDomainComponent;
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
            function (add_domain_service_1_1) {
                add_domain_service_1 = add_domain_service_1_1;
            },
            function (domain_1_1) {
                domain_1 = domain_1_1;
            },
            function (ssl_1_1) {
                ssl_1 = ssl_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            AddDomainComponent = (function () {
                function AddDomainComponent(_creds, _router, _addDomainService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._addDomainService = _addDomainService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Add Domain';
                    this.submitted = false;
                    this.active = false;
                }
                ;
                AddDomainComponent.prototype.ngOnInit = function () {
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._menuService.setClearMenu();
                        this.domain = new domain_1.Domain();
                        var ssl = new ssl_1.Ssl();
                        this.domain.ssl = ssl;
                        this.active = true;
                    }
                };
                AddDomainComponent.prototype.getTitle = function () {
                    return this.title;
                };
                AddDomainComponent.prototype.onSubmit = function () {
                    console.log("Res in add-domain submit: " + JSON.stringify(this.domain));
                    this.processSubmittedData();
                };
                AddDomainComponent.prototype.processSubmittedData = function () {
                    var _this = this;
                    if (!this.submitted) {
                        this.domain.domains = [];
                        this.domain.domains.push(this.domain.domain1);
                        if (this.domain.domain2 && this.domain.domain2 !== "") {
                            this.domain.domains.push(this.domain.domain2);
                        }
                        delete this.domain.domain1;
                        delete this.domain.d;
                        console.log("Res in add-domain submit: " + JSON.stringify(this.domain));
                        this._addDomainService.addDomain(this.domain)
                            .subscribe(function (res) { return _this.submitSuccess(res); }, function (error) { return _this.error(error); });
                    }
                };
                AddDomainComponent.prototype.submitSuccess = function (res) {
                    if (res.success) {
                        this.submitted = true;
                        this.errorMessage = "";
                        this._router.navigate(['Domains']);
                    }
                    else {
                        this.errorMessage = "Update Failed";
                    }
                };
                AddDomainComponent.prototype.error = function (err) {
                    console.log("Add Domain service error: " + err);
                };
                AddDomainComponent = __decorate([
                    core_1.Component({
                        selector: 'domain-add',
                        templateUrl: "../templates/add-domain.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            add_domain_service_1.AddDomainService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_deprecated_1.Router, add_domain_service_1.AddDomainService, router_deprecated_1.RouteParams, menu_service_1.MenuService])
                ], AddDomainComponent);
                return AddDomainComponent;
            })();
            exports_1("AddDomainComponent", AddDomainComponent);
        }
    }
});
//# sourceMappingURL=add-domain.component.js.map