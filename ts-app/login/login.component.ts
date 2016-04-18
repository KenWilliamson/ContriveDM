import {Component} from 'angular2/core';
import {Router } from 'angular2/router';
import {Credentials} from '../business/credentials/credentials';
import {NgForm}    from 'angular2/common';
import {User}    from '../domainObjects/user';
//import {MenuComponent}   from './menu/menu.component';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@Component({
    selector: 'login',
    templateUrl: "../templates/login.html",      //directives: [MenuComponent]

    providers: [
        Credentials,
    ]

})

export class LoginComponent {
    title = 'Login';
    constructor(private _creds: Credentials, private _router: Router) { };
    model = new User();
    
    submitted = false;
    active = true;
    
    onSubmit() {
        this.submitted = true;
        console.log("submitted:" + this.submitted);
    }
    
    getTitle() {
        return this.title;
    }
}



