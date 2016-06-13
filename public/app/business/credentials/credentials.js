System.register(['@angular/core', '../../utilities/cookies'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cookies_1;
    var Credentials;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cookies_1_1) {
                cookies_1 = cookies_1_1;
            }],
        execute: function() {
            Credentials = (function () {
                function Credentials() {
                }
                Credentials.prototype.checkCreds = function () {
                    var rtn = false;
                    var creds = cookies_1.Cookie.getCookie("contriveDM");
                    if (creds) {
                        rtn = true;
                    }
                    return rtn;
                };
                Credentials.prototype.getToken = function () {
                    var token = cookies_1.Cookie.getCookie("contriveDM");
                    return token;
                };
                Credentials.prototype.setCreds = function (un, pw) {
                    var temp = un.concat(":", pw);
                    var token = btoa(temp);
                    cookies_1.Cookie.setCookie("contriveDM", token);
                    cookies_1.Cookie.setCookie("contriveUsername", un);
                };
                Credentials.prototype.getUsername = function () {
                    var un = cookies_1.Cookie.getCookie("contriveUsername");
                    return un;
                };
                Credentials.prototype.deleteCreds = function () {
                    cookies_1.Cookie.deleteCookie("contriveDM");
                    cookies_1.Cookie.deleteCookie("contriveUsername");
                };
                Credentials = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Credentials);
                return Credentials;
            })();
            exports_1("Credentials", Credentials);
        }
    }
});
//# sourceMappingURL=credentials.js.map