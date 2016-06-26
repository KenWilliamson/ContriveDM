import {Component, OnInit} from '@angular/core';
import {MenuService}   from '../menu/services/menu-service';
import {Credentials} from '../business/credentials/credentials';
import {DomainListService}   from './services/domain-list.service';
import {Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'domain-list',
    templateUrl: "../templates/domains.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        DomainListService
    ]
})

export class DomainListComponent implements OnInit {
    title = 'Domains';

    domainList: Domain[];

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _domainListService: DomainListService,
        private _menuService: MenuService
    ) { };

    ngOnInit() {
        if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        } else {           
            this._menuService.removeClearMenu();
            this._domainListService.getDomainList()
                .subscribe(
                res => this.domainList = res,
                error => this.error(error));
        }
    }

    getTitle() {
        return this.title;
    }

    error(err) {
        console.log("Domain list service error: " + err);
    }
}



