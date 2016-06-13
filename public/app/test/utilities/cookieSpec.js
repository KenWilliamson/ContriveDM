System.register(['@angular/core/testing', '../../utilities/cookies'], function(exports_1) {
    var testing_1, cookies_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cookies_1_1) {
                cookies_1 = cookies_1_1;
            }],
        execute: function() {
            testing_1.describe('Cookie', function () {
                testing_1.it('is not undefined', function () {
                    var cookie = new cookies_1.Cookie();
                    testing_1.expect(cookie).not.toEqual(undefined);
                });
                testing_1.it('can set and get a cookie', function () {
                    cookies_1.Cookie.setCookie("specTest", "test", 2);
                    var c = cookies_1.Cookie.getCookie("specTest");
                    testing_1.expect(c).not.toEqual(undefined);
                    testing_1.expect(c).not.toEqual(null);
                    testing_1.expect(c).toEqual("test");
                });
                testing_1.it('to delete a cookie', function () {
                    cookies_1.Cookie.deleteCookie("specTest");
                    var c = cookies_1.Cookie.getCookie("specTest");
                    testing_1.expect(c).toEqual(null);
                });
            });
        }
    }
});
//# sourceMappingURL=cookieSpec.js.map