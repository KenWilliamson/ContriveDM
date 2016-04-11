import {Component, Input} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
@Component({
    selector: 'menu-main',
    templateUrl: "../../templates/menus/menu.html",
    directives: [ROUTER_DIRECTIVES],
    //providers: [
        //ROUTER_PROVIDERS
    //]

})
export class MenuComponent {
    title = 'menu';
    domainActive = "color: white;";
    addActive = "";

    getTitle() {
        return this.title;
    }

    @Input()
    setDomainActive() {
        this.domainActive = "color: white;";
        this.addActive = "";

    }
    @Input()
    setAddActive() {
        this.domainActive = "";
        this.addActive = "active";
    }

}



