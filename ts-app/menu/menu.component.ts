import {Component, Input, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Credentials} from '../business/credentials/credentials';
@Component({
    selector: 'menu-main',
    templateUrl: "../../templates/menus/menu.html",
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        Credentials
    ]

})
export class MenuComponent implements OnInit {
    title = 'Menu';
    domainActive = "color: white;";
    addActive = "";    
    @Input() showMenu: boolean;
    
    constructor(private _creds: Credentials) { };
    

    getTitle() {
        return this.title;
    }

    @Input()
    setShow(show) {        
        this.showMenu = show;        
    }


    getShow(){
        return this.showMenu;
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

    ngAfterContentChecked() {
        //console.log("in ngAfterContentChecked");
        this.showMenu = this._creds.checkCreds();
    }


}

