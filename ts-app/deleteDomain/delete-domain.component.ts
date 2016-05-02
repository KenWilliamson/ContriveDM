import {Component, OnInit} from 'angular2/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {DeleteDomainService}   from './services/delete-domain.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';

@Component({
    selector: 'delete-domain',
    templateUrl: "../templates/deleteDomain.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [        
        DeleteDomainService
    ]
})


export class DeleteDomainComponent implements OnInit {
    title = 'Delete Domain';

    domain: Domain;
    id: string;
    domainName: string;
    ipAddress: string;
    port: string;



    errorMessage: string

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _deleteDomainService: DeleteDomainService,
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
        this.id = res._id;        
        this.domainName = this.domain.domainName;
        this.ipAddress = this.domain.upstreamServerIp;
        this.port = this.domain.listenPort;
        console.log("Res in delete-domain: " + JSON.stringify(this.domain));
    }
    error(err) {
        console.log("Delete Domain service error: " + err);
    }


}



