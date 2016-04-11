import {Component} from 'angular2/core';
//import {MenuComponent}   from './menu/menu.component';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@Component({
    selector: 'domain-list',
    templateUrl: "../templates/domains.html"      //directives: [MenuComponent]

})

export class DomainListComponent {
    title = 'Domains';
    constructor(
        //console.log("in domains");
    )

    getTitle() {
        return this.title;
    }
}



