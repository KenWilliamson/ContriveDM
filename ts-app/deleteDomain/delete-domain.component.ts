import {Component, OnInit} from 'angular2/core';
import {Credentials} from '../business/credentials/credentials';
import {DeleteDomainService}   from './services/delete-domain.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';

@Component({
    selector: 'delete-domain',
    templateUrl: "../templates/deleteDomain.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        //Credentials,
        DeleteDomainService
    ]
})


export class DeleteDomainComponent implements OnInit {
    title = 'Delete Domain';

    domain: Domain;



    errorMessage: string

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _deleteDomainService: DeleteDomainService,
        private _routeParams: RouteParams) { };

    ngOnInit() {
        if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        } else {
            let id = this._routeParams.get('id');
            this._deleteDomainService.getDomain(id)
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
        this.domain.id = res._id;
        delete this.domain._id;
        console.log("Res in edit-domain: " + JSON.stringify(this.domain));
    }
    error(err) {
        console.log("Edit Domain service error: " + err);
    }


}



