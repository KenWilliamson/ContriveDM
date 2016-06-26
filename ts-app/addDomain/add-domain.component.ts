import {Component} from '@angular/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {AddDomainService}   from './services/add-domain.service';
import {Domain}   from '../domainObjects/domain';
import {Ssl}   from '../domainObjects/ssl';
import {Router, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'domain-add',
    templateUrl: "../templates/addDomain.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        AddDomainService
    ]
})

export class AddDomainComponent implements OnInit {
    title = 'Add Domain';
    domain: Domain;
    submitted = false;
    active = false;
    errorMessage: string;
    
    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _addDomainService: AddDomainService,
        private _routeParams: RouteParams,
        private _menuService: MenuService        
    ) { };

    ngOnInit() {
         if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        } else {            
            this._menuService.setClearMenu();  
            this.domain = new Domain();
            var ssl = new Ssl();
            this.domain.ssl = ssl;
            //this.domain.domainName = "";
            this.active = true;          
        }
    }

    getTitle() {
        return this.title;
    }
    
    onSubmit() {
        console.log("Res in add-domain submit: " + JSON.stringify(this.domain));
        this.processSubmittedData();
    }

    processSubmittedData() {
        if (!this.submitted) {
            this.domain.domains = [];
            this.domain.domains.push(this.domain.domain1)
            if (this.domain.domain2 && this.domain.domain2 !== "") {
                this.domain.domains.push(this.domain.domain2)
            }
            delete this.domain.domain1;
            delete this.domain.d                    //let model = this.domain;

            console.log("Res in add-domain submit: " + JSON.stringify(this.domain));
            this._addDomainService.addDomain(this.domain)
                .subscribe(
                res => this.submitSuccess(res),
                error => this.error(error));
        }

    }

    submitSuccess(res) {
        if (res.success) {
            this.submitted = true;
            this.errorMessage = "";
            this._router.navigate(['Domains']);
        } else {
            this.errorMessage = "Update Failed";
        }
    }
    
    error(err) {
        console.log("Add Domain service error: " + err);
    }
}



