import {Component} from 'angular2/core';
import {MenuComponent}   from './menu/menu.component';
import {DomainListComponent}   from './domains/domain-list.component';
import {AddDomainComponent}   from './addDomain/add-domain.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
@Component({
    selector: 'contrive-app',
    templateUrl: "../templates/main.html",
    
    directives: [
        ROUTER_DIRECTIVES,
        MenuComponent
    ],
    providers: [
        ROUTER_PROVIDERS
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
    }
])
export class AppComponent {
    title = 'ContriveDM';

    getTitle() {
        return this.title;
    }
}



