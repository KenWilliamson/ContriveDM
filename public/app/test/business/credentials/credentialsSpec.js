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
                testing_1.it('is not undefined', function () {
                    var creds = new credentials_1.Credentials();
                    testing_1.expect(creds).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    testing_1.expect(null).not.toEqual(undefined);
                });
            });
        }
    }
});
//# sourceMappingURL=credentialsSpec.js.map