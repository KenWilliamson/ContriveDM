import {Component} from '@angular/core';
import {Router } from '@angular/router-deprecated';
import {Credentials} from '../business/credentials/credentials';
import {NgForm}    from '@angular/common';
import {User}    from '../domainObjects/user';
import {LoginService}    from './services/login.service';

@Component({
    selector: 'login',
    templateUrl: "../templates/login.html",      //directives: [MenuComponent]

    providers: [
        LoginService
    ]
})

export class LoginComponent {
    title = 'Login';
    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _loginService: LoginService
    ) { };

    model = new User();

    submitted = false;
    active = true;
    errorMessage: string

    onSubmit() {
        this.submitted = true;
        console.log("submitted:" + this.submitted);
        console.log("password:" + this.model.password);
        let req = {};
        req.username = this.model.username;
        req.password = this.model.password;

        this._loginService.login(req)
            .subscribe(
            res => this.successLogin(res),
            error => this.loginError(error));
    }

    successLogin(res) {
        console.log("success res: " + JSON.stringify(res));
        if (res.success) {
            this.errorMessage = "";
            this._creds.setCreds(this.model.username, this.model.password);
            this._router.navigate(['Domains']);
        } else {
            this.errorMessage = "Login Failed";
        }
    }
    loginError(err) {
        console.log("error res: " + JSON.stringify(err));
    }

    getTitle() {
        return this.title;
    }
}



