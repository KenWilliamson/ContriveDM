import {Component, OnInit} from '@angular/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {DeleteUserService}   from './services/delete-user.service';
import {Router, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'delete-user',
    templateUrl: "../templates/deleteUser.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [        
        DeleteUserService
    ]
})


export class DeleteUserComponent implements OnInit {
    title = 'Delete User';

    user: User; 
    active = false;

    errorMessage: string

    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _deleteUserService: DeleteUserService,
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
            this._deleteUserService.getUser(id)
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
        this.active = true;     
        console.log("Res in delete-user: " + JSON.stringify(this.user));
    }
    
    onDeleteClicked(){
        console.log("Delete User");
        this._deleteUserService.deleteUser(this.user._id)
                .subscribe(
                res => this.deleteSuccess(res),
                error => this.error(error));
    }
    
    onCancelClicked(){        
        this._router.navigate(['Users']);
    }
    
    deleteSuccess(res){
        if(res.success){
            this._router.navigate(['Users']);
        }
    }
    
    error(err) {
        console.log("Delete User service error: " + err);
    }


}



