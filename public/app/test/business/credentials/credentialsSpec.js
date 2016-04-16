System.register(['angular2/testing', '../../../business/credentials/credentials'], function(exports_1) {
    var testing_1, credentials_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (credentials_1_1) {
                credentials_1 = credentials_1_1;
            }],
        execute: function() {
            testing_1.describe('Credentials', function () {
                var creds = new credentials_1.Credentials();
                testing_1.it('is not undefined', function () {
                    testing_1.expect(creds).not.toEqual(undefined);
                });
                testing_1.it('creds should initially not be set', function () {
                    var loggedIn = creds.checkCreds();
                    testing_1.expect(loggedIn).not.toEqual(true);
                });
                testing_1.it('should be able to set creds', function () {
                    creds.setCreds("test", "test");
                    var loggedIn = creds.checkCreds();
                    testing_1.expect(loggedIn).toEqual(true);
                });
                testing_1.it('should be able to get token', function () {
                    var token = creds.getToken();
                    testing_1.expect(token).not.toEqual(null);
                });
                testing_1.it('should be able to get username', function () {
                    var un = creds.getUsername();
                    testing_1.expect(un).toEqual("test");
                });
                testing_1.it('should be able to delete creds', function () {
                    creds.deleteCreds();
                    var loggedIn = creds.checkCreds();
                    testing_1.expect(loggedIn).toEqual(false);
                });
            });
        }
    }
});
//# sourceMappingURL=credentialsSpec.js.map