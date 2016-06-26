import {Component, OnInit} from '@angular/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {EditUserService}   from './services/edit-user.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'edit-user',
    templateUrl: "../templates/editUser.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        EditUserService
    ]
})


export class EditUserComponent implements OnInit {
    title = 'Edit User';

    user: User;

    submitted = false;
    active = false;
    errorMessage: string

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _editUserService: EditUserService,
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
            this._editUserService.getUser(id)
                .subscribe(
                res => this.success(res),
                error => this.error(error));
        }
    }

    getTitle() {
        return this.title;
    }

    success(res) {
        this.user = res
        this.user.id = res._id;
        delete this.user._id;
        this.active = true;
        console.log("Res in edit-user: " + JSON.stringify(this.user));
    }
    error(err) {
        console.log("Edit User service error: " + err);
    }

    onSubmit() {
        console.log("Res in edit-user submit: " + JSON.stringify(this.user));
        this.processSubmittedData();
    }

    processSubmittedData() {
        if (!this.submitted) {
            console.log("Res in edit-user submit: " + JSON.stringify(this.domain));
            if (this.user.password === this.user.confirm) {
                this._editUserService.updateUser(this.user)
                    .subscribe(
                    res => this.submitSuccess(res),
                    error => this.error(error));
            } else {
                this.errorMessage = "Password Match";
            }

        }

    }

    submitSuccess(res) {
        if (res.success) {
            this.submitted = true;
            if (this.user.password && this.user.password !== "") {
                let credUsername = this._creds.getUsername();
                if (this.user.username === credUsername) {
                    this._creds.setCreds(this.user.username, this.user.password);
                }
            }
            this.errorMessage = "";
            this._router.navigate(['Users']);
        } else {
            this.errorMessage = "Update Failed";
        }
    }
}



