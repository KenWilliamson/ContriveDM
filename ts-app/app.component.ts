import {Component} from 'angular2/core';
//import {Credentials} from './business/credentials/credentials';
import {MenuComponent}   from './menu/menu.component';
import {DomainListComponent}   from './domains/domain-list.component';
import {AddDomainComponent}   from './addDomain/add-domain.component';
import {LoginComponent}   from './login/login.component';
import {MenuComponent}   from './menu/menu.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
//import {RouteConfig} from 'angular2/router';
@Component({
    selector: 'contrive-app',
    templateUrl: "../templates/main.html",
    
    directives: [
        ROUTER_DIRECTIVES,
        MenuComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        //Credentials//,
        MenuComponent
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
        path: '/login',
        name: 'Login',
        component: LoginComponent
    }
])

export class AppComponent {
    title = 'ContriveDM';
    //constructor(private _menu: MenuComponent){};
    //showMenu = true;
    getTitle() {
        return this.title;
    }
}



