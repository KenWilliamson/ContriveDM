import {Component, OnInit} from 'angular2/core';
import {MenuComponent}   from '../menu/menu.component';
import {Credentials} from '../business/credentials/credentials';
import {AddDomainComponent}   from '../addDomain/add-domain.component';
import {Router } from 'angular2/router';

@Component({
    selector: 'domain-list',
    templateUrl: "../templates/domains.html",

    providers: [
        Credentials,
        MenuComponent
    ]
})


export class DomainListComponent implements OnInit {
    title = 'Domains';

    constructor(private _creds: Credentials, private _router: Router) { };

    ngOnInit() {
        if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        }
    }

    getTitle() {
        return this.title;
    }
}



