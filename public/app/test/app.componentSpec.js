System.register(['../app.component'], function(exports_1) {
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('AppComponent', function () {
                it('is not undefined', function () {
                    var app = new app_component_1.AppComponent();
                    expect(null).not.toEqual(undefined);
                });
                it('is has a title', function () {
                    var app = new app_component_1.AppComponent();
                    expect(app.getTitle()).toEqual("ContriveDM");
                });
            });
        }
    }
});
//# sourceMappingURL=app.componentSpec.js.map