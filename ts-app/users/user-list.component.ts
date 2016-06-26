import {Component, OnInit} from '@angular/core';
import {MenuService}   from '../menu/services/menu-service';
import {Credentials} from '../business/credentials/credentials';
import {UserListService}   from './services/user-list.service';
import {Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {User}  from '../domainObjects/user';

@Component({
    selector: 'user-list',
    templateUrl: "../templates/users.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        UserListService
    ]
})

export class UserListComponent implements OnInit {
    title = 'Users';

    userList: User[];

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _userListService: UserListService,
        private _menuService: MenuService
    ) { };

    ngOnInit() {
        if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        } else {            
            this._menuService.removeClearMenu();
            this._userListService.getUserList()
                .subscribe(
                res => this.userList = res,
                error => this.error(error));
        }
    }

    getTitle() {
        return this.title;
    }

    error(err) {
        console.log("User list service error: " + err);
    }
}



