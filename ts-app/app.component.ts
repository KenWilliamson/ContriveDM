import {Component} from '@angular/core';
import {Credentials} from './business/credentials/credentials';
import {MenuComponent}   from './menu/menu.component';
import {MenuService}   from './menu/services/menu-service';
import {DomainListComponent}   from './domains/domain-list.component';
import {UserListComponent}   from './users/user-list.component';
import {AddDomainComponent}   from './addDomain/add-domain.component';
import {AddUserComponent}   from './addUser/add-user.component';
import {EditDomainComponent}   from './editDomain/edit-domain.component';
import {EditUserComponent}   from './editUser/edit-user.component';
import {DeleteDomainComponent}   from './deleteDomain/delete-domain.component';
import {DeleteUserComponent}   from './deleteUser/delete-user.component';
import {LoginComponent}   from './login/login.component';
import {LogoutComponent}   from './logout/logout.component';
import {MenuComponent}   from './menu/menu.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    selector: 'contrive-app',
    templateUrl: "../templates/main.html",

    directives: [
        ROUTER_DIRECTIVES,
        MenuComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        Credentials,
        MenuService
    ]


})

@RouteConfig([
    {
        path: '/',
        name: 'Domains',
        component: DomainListComponent
    },
    {
        path: '/add',
        name: 'AddDomain',
        component: AddDomainComponent
    },
    {
        path: '/editDomain/:id',
        name: 'EditDomain',
        component: EditDomainComponent
    },
    {
        path: '/deleteDomain/:id',
        name: 'DeleteDomain',
        component: DeleteDomainComponent
    },
    {
        path: '/users',
        name: 'Users',
        component: UserListComponent
    },
    {
        path: '/adduser',
        name: 'AddUser',
        component: AddUserComponent
    },
    {
        path: '/editUser/:id',
        name: 'EditUser',
        component: EditUserComponent
    },
    ,
    {
        path: '/deleteUser/:id',
        name: 'DeleteUser',
        component: DeleteUserComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/logout',
        name: 'Logout',
        component: LogoutComponent
    }
])

export class AppComponent {
    title = 'ContriveDM';
    constructor(
        private _menuService: MenuService,
        private _creds: Credentials
    ) { };
    getTitle() {
        return this.title;
    }
}



