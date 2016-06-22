import {Component, OnInit} from '@angular/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {DeleteDomainService}   from './services/delete-domain.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

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
    
    
    
    onDeleteClicked(){
        console.log("Delete Domain");
        this._deleteDomainService.deleteDomain(this.id)
                .subscribe(
                res => this.deleteSuccess(res),
                error => this.error(error));
    }
    
    onCancelClicked(){        
        this._router.navigate(['Domains']);
    }
    
    deleteSuccess(res){
        if(res.success){
            this._router.navigate(['Domains']);
        }
    }
    
    error(err) {
        console.log("Delete Domain service error: " + err);
    }


}



