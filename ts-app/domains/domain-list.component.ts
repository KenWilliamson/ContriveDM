import {Component, OnInit} from 'angular2/core';
//import {MenuComponent}   from '../menu/menu.component';
import {Credentials} from '../business/credentials/credentials';
import {DomainListService}   from './services/domain-list.service';
import {Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'domain-list',
    templateUrl: "../templates/domains.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        //Credentials,
        //MenuComponent,
        DomainListService
    ]
})


export class DomainListComponent implements OnInit {
    title = 'Domains';
    
    domainList:Domain[];

    constructor(private _creds: Credentials, private _router: Router, private _domainListService: DomainListService) { };

    ngOnInit() {
        if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        }else{
            this._domainListService.getDomainList()
            .subscribe(
            res => this.domainList = res,
            error => this.error(error));
        }
    }

    getTitle() {
        return this.title;
    }
    
    error(err){
        console.log("Domain list service error: " + err);
    }
}



