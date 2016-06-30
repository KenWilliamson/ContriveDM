import {Component, OnInit} from '@angular/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {PushDomainsService}   from './services/push-domains.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'push-domains',
    templateUrl: "../templates/pushDomains.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [        
        PushDomainsService
    ]
})


export class PushDomainsComponent implements OnInit {
    title = 'Push Domains';

    errorMessage:string = "";


    errorMessage: string

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _pushDomainsService: PushDomainsService,
        private _routeParams: RouteParams,
        private _menuService: MenuService
    ) { };

   
    getTitle() {
        return this.title;
    }
      
        
    onPushClicked(){
        console.log("Push Domains");
        this._pushDomainsService.pushDomains()
                .subscribe(
                res => this.pushSuccess(res),
                error => this.error(error));
    }
    
    onCancelClicked(){        
        this._router.navigate(['Domains']);
    }
    
    pushSuccess(res){
        if(res.success){
            this._router.navigate(['Domains']);
        }
    }
    
    error(err) {
        console.log("Push Domains service error: " + err);
        this.errorMessage = "Push Error";
    }


}



