import {Component} from 'angular2/core';
import {Router } from 'angular2/router';
import {Credentials} from '../business/credentials/credentials';
import {NgForm}    from 'angular2/common';
import {User}    from '../domainObjects/user';

@Component({
    selector: 'login',
    template: "",
    providers: [
        Credentials
    ]
})

export class LogoutComponent implements OnInit {
    title = 'Logout';
    constructor(private _creds: Credentials, private _router: Router) { };

    ngOnInit() {
        this._creds.deleteCreds();
        this._router.navigate(['Login']);
    }


    errorMessage: string


    getTitle() {
        return this.title;
    }
}



