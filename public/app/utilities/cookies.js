System.register([], function(exports_1) {
    var Cookie;
    return {
        setters:[],
        execute: function() {
            Cookie = (function () {
                function Cookie() {
                }
                Cookie.getCookie = function (name) {
                    var myWindow = window;
                    name = myWindow.escape(name);
                    var regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
                    var result = regexp.exec(document.cookie);
                    return (result === null) ? null : myWindow.unescape(result[1]);
                };
                Cookie.setCookie = function (name, value, expires, path, domain) {
                    var myWindow = window;
                    var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';
                    if (expires) {
                        var dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                        cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
                    }
                    if (path) {
                        cookieStr += 'path=' + path + ';';
                    }
                    if (domain) {
                        cookieStr += 'domain=' + domain + ';';
                    }
                    document.cookie = cookieStr;
                };
                Cookie.deleteCookie = function (name, path, domain) {
                    if (Cookie.getCookie(name)) {
                        Cookie.setCookie(name, '', -1, path, domain);
                    }
                };
                return Cookie;
            })();
            exports_1("Cookie", Cookie);
        }
    }
});
//# sourceMappingURL=cookies.js.map