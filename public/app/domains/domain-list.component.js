System.register(['angular2/core', '../business/credentials/credentials', './services/domain-list.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, domain_list_service_1, router_1;
    var DomainListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            },
            function (domain_list_service_1_1) {
                domain_list_service_1 = domain_list_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DomainListComponent = (function () {
                function DomainListComponent(_creds, _router, _domainListService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._domainListService = _domainListService;
                    this.title = 'Domains';
                }
                ;
                DomainListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._creds.checkCreds()) {
                        console.log("not logged in");
                        this._router.navigate(['Login']);
                    }
                    else {
                        this._domainListService.getDomainList()
                            .subscribe(function (res) { return _this.domainList = res; }, function (error) { return _this.error(error); });
                    }
                };
                DomainListComponent.prototype.getTitle = function () {
                    return this.title;
                };
                DomainListComponent.prototype.error = function (err) {
                    console.log("Domain list service error: " + err);
                };
                DomainListComponent = __decorate([
                    core_1.Component({
                        selector: 'domain-list',
                        templateUrl: "../templates/domains.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            credentials_1.Credentials,
                            domain_list_service_1.DomainListService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_1.Router, domain_list_service_1.DomainListService])
                ], DomainListComponent);
                return DomainListComponent;
            })();
            exports_1("DomainListComponent", DomainListComponent);
        }
    }
});
//# sourceMappingURL=domain-list.component.js.map