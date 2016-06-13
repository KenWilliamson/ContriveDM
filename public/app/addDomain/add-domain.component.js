System.register(['@angular/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AddDomainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AddDomainComponent = (function () {
                function AddDomainComponent() {
                    this.title = 'Add Domain';
                }
                AddDomainComponent.prototype.ngOnInit = function () {
                };
                AddDomainComponent.prototype.getTitle = function () {
                    return this.title;
                };
                AddDomainComponent = __decorate([
                    core_1.Component({
                        selector: 'domain-add',
                        templateUrl: "../templates/add-domain.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddDomainComponent);
                return AddDomainComponent;
            })();
            exports_1("AddDomainComponent", AddDomainComponent);
        }
    }
});
//# sourceMappingURL=add-domain.component.js.map