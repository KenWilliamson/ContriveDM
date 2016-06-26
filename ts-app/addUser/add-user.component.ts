import {Component} from '@angular/core';
import {Credentials} from '../business/credentials/credentials';
import {MenuService}   from '../menu/services/menu-service';
import {AddUserService}   from './services/add-user.service';
import {User}   from '../domainObjects/user';
import {Router, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'user-add',
    templateUrl: "../templates/addUser.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        AddUserService
    ]
})

export class AddUserComponent implements OnInit {
    title = 'Add User';
    user: User;
    submitted = false;
    active = false;
    errorMessage: string;
    
    constructor(
        private _creds: Credentials,
        private _router: Router,
        private _addUserService: AddUserService,
        private _routeParams: RouteParams,
        private _menuService: MenuService        
    ) { };

    ngOnInit() {
         if (!this._creds.checkCreds()) {
            console.log("not logged in");
            this._router.navigate(['Login']);
        } else {            
            this._menuService.setClearMenu();  
            this.user = new User();
            this.active = true;          
        }
    }

    getTitle() {
        return this.title;
    }
    
    onSubmit() {
        console.log("Res in add-user submit: " + JSON.stringify(this.user));
        this.processSubmittedData();
    }

    processSubmittedData() {
        if (!this.submitted) {  
            console.log("Res in add-user submit: " + JSON.stringify(this.user));
            if (this.user.password === this.user.confirm) {
                this._addUserService.addUser(this.user)
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
            this.errorMessage = "";
            this._router.navigate(['Users']);
        } else {
            this.errorMessage = "Update Failed";
        }
    }
    
    error(err) {
        console.log("Add User service error: " + err);
    }
}



