System.register(['@angular/core', '../business/credentials/credentials', '../menu/services/menu-service', './services/push-domains.service', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, credentials_1, menu_service_1, push_domains_service_1, router_deprecated_1;
    var PushDomainsComponent;
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
            function (push_domains_service_1_1) {
                push_domains_service_1 = push_domains_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            PushDomainsComponent = (function () {
                function PushDomainsComponent(_creds, _router, _pushDomainsService, _routeParams, _menuService) {
                    this._creds = _creds;
                    this._router = _router;
                    this._pushDomainsService = _pushDomainsService;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.title = 'Push Domains';
                    this.errorMessage = "";
                }
                ;
                PushDomainsComponent.prototype.getTitle = function () {
                    return this.title;
                };
                PushDomainsComponent.prototype.onPushClicked = function () {
                    var _this = this;
                    console.log("Push Domains");
                    this._pushDomainsService.pushDomains()
                        .subscribe(function (res) { return _this.pushSuccess(res); }, function (error) { return _this.error(error); });
                };
                PushDomainsComponent.prototype.onCancelClicked = function () {
                    this._router.navigate(['Domains']);
                };
                PushDomainsComponent.prototype.pushSuccess = function (res) {
                    if (res.success) {
                        this._router.navigate(['Domains']);
                    }
                };
                PushDomainsComponent.prototype.error = function (err) {
                    console.log("Push Domains service error: " + err);
                    this.errorMessage = "Push Error";
                };
                PushDomainsComponent = __decorate([
                    core_1.Component({
                        selector: 'push-domains',
                        templateUrl: "../templates/pushDomains.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            push_domains_service_1.PushDomainsService
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_deprecated_1.Router, push_domains_service_1.PushDomainsService, router_deprecated_1.RouteParams, menu_service_1.MenuService])
                ], PushDomainsComponent);
                return PushDomainsComponent;
            })();
            exports_1("PushDomainsComponent", PushDomainsComponent);
        }
    }
});
//# sourceMappingURL=push-domains.component.js.map