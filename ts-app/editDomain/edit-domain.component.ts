import {Component, OnInit} from 'angular2/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {EditDomainService}   from './services/edit-domain.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';

@Component({
    selector: 'edit-domain',
    templateUrl: "../templates/editDomain.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [        
        EditDomainService
    ]
})


export class EditDomainComponent implements OnInit {
    title = 'Edit Domain';

    domain: Domain;

    submitted = false;
    active = false;
    errorMessage: string

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _editDomainService: EditDomainService,
        private _routeParams: RouteParams,
        private _menuService: MenuService        
    ) { };

    ngOnInit() {
        if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        } else {            
            this._menuService.setClearMenu();
            let id = this._routeParams.get('id');
            this._editDomainService.getDomain(id)
                .subscribe(
                res => this.success(res),
                error => this.error(error));
        }
    }

    getTitle() {
        return this.title;
    }

    success(res) {
        this.domain = res
        for (var cnt = 0; cnt < this.domain.domains.length; cnt++) {
            if (cnt === 0) {
                this.domain.domain1 = this.domain.domains[cnt].domainName;
                if (this.domain.domains.length === 1) {
                    this.domain.domain2 = "";
                }
            } else {
                this.domain.domain2 = this.domain.domains[cnt].domainName;
            }

        }
        this.domain.id = res._id;
        delete this.domain._id;
        if (!this.domain.ssl) {
            let tempSsl = {};
            tempSsl.listenPort = "";
            tempSsl.sslCertificate = "";
            tempSsl.sslCertificateKey = "";
            this.domain.ssl = tempSsl;
        }
        this.active = true;
        console.log("Res in edit-domain: " + JSON.stringify(this.domain));
    }
    error(err) {
        console.log("Edit Domain service error: " + err);
    }

    onSubmit() {
        console.log("Res in edit-domain submit: " + JSON.stringify(this.domain));
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

            console.log("Res in edit-domain submit: " + JSON.stringify(this.domain));
            this._editDomainService.updateDomain(this.domain)
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
}



