System.register(['angular2/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/edit-domain.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, edit_domain_service_1, router_1;
    var EditDomainComponent;
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
            function (edit_domain_service_1_1) {
                edit_domain_service_1 = edit_domain_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditDomainComponent = (function () {
                function EditDomainComponent(_creds, _router, _editDomainService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._editDomainService = _editDomainService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Edit Domain';
                    this.submitted = false;
                    this.active = false;
                }
                ;
                EditDomainComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._menuService.setClearMenu();
                        var id = this._routeParams.get('id');
                        this._editDomainService.getDomain(id)
                            .subscribe(function (res) { return _this.success(res); }, function (error) { return _this.error(error); });
                    }
                };
                EditDomainComponent.prototype.getTitle = function () {
                    return this.title;
                };
                EditDomainComponent.prototype.success = function (res) {
                    this.domain = res;
                    for (var cnt = 0; cnt < this.domain.domains.length; cnt++) {
                        if (cnt === 0) {
                            this.domain.domain1 = this.domain.domains[cnt].domainName;
                            if (this.domain.domains.length === 1) {
                                this.domain.domain2 = "";
                            }
                        }
                        else {
                            this.domain.domain2 = this.domain.domains[cnt].domainName;
                        }
                    }
                    this.domain.id = res._id;
                    delete this.domain._id;
                    if (!this.domain.ssl) {
                        var tempSsl = {};
                        tempSsl.listenPort = "";
                        tempSsl.sslCertificate = "";
                        tempSsl.sslCertificateKey = "";
                        this.domain.ssl = tempSsl;
                    }
                    this.active = true;
                    console.log("Res in edit-domain: " + JSON.stringify(this.domain));
                };
                EditDomainComponent.prototype.error = function (err) {
                    console.log("Edit Domain service error: " + err);
                };
                EditDomainComponent.prototype.onSubmit = function () {
                    console.log("Res in edit-domain submit: " + JSON.stringify(this.domain));
                    this.processSubmittedData();
                };
                EditDomainComponent.prototype.processSubmittedData = function () {
                    var _this = this;
                    if (!this.submitted) {
                        this.domain.domains = [];
                        this.domain.domains.push(this.domain.domain1);
                        if (this.domain.domain2 && this.domain.domain2 !== "") {
                            this.domain.domains.push(this.domain.domain2);
                        }
                        delete this.domain.domain1;
                        delete this.domain.d;
                        console.log("Res in edit-domain submit: " + JSON.stringify(this.domain));
                        this._editDomainService.updateDomain(this.domain)
                            .subscribe(function (res) { return _this.submitSuccess(res); }, function (error) { return _this.error(error); });
                    }
                };
                EditDomainComponent.prototype.submitSuccess = function (res) {
                    if (res.success) {
                        this.submitted = true;
                        this.errorMessage = "";
                        this._router.navigate(['Domains']);
                    }
                    else {
                        this.errorMessage = "Update Failed";
                    }
                };
                EditDomainComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-domain',
                        templateUrl: "../templates/editDomain.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            edit_domain_service_1.EditDomainService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_1.Router, edit_domain_service_1.EditDomainService, router_1.RouteParams, menu_service_1.MenuService])
                ], EditDomainComponent);
                return EditDomainComponent;
            })();
            exports_1("EditDomainComponent", EditDomainComponent);
        }
    }
});
//# sourceMappingURL=edit-domain.component.js.map