System.register(['angular2/core', 'angular2/router', '../business/credentials/credentials', '../domainObjects/user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, credentials_1, user_1;
    var LoginComponent;
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
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_creds, _router) {
                    this._creds = _creds;
                    this._router = _router;
                    this.title = 'Login';
                    this.model = new user_1.User();
                    this.submitted = false;
                    this.active = true;
                }
                ;
                LoginComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    console.log("submitted:" + this.submitted);
                };
                LoginComponent.prototype.getTitle = function () {
                    return this.title;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: "../templates/login.html",
                        providers: [
                            credentials_1.Credentials,
                        ]
                    }), 
                    __metadata('design:paramtypes', [credentials_1.Credentials, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map