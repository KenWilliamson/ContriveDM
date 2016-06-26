import {Component, Input, OnInit } from '@angular/core';
import {MenuService}   from './services/menu-service';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Credentials} from '../business/credentials/credentials';
@Component({
    selector: 'menu-main',
    templateUrl: "../../templates/menus/menu.html",
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [

    ]
})

export class MenuComponent implements OnInit {
    title = 'Menu';
    domainActive = true;
    addActive = "";
    usersActive = "";
    @Input() showMenu: boolean;

    constructor(
        private _creds: Credentials,
        private _menuService: MenuService        
    ) { };

    getTitle() {
        return this.title;
    }

    @Input()
    setShow(show) {
        this.showMenu = show;
    }


    getShow() {
        return this.showMenu;
    }

    @Input()
    setDomainActive() {
        this.domainActive = true;
        this.addActive = "";
        this.usersActive = "";
        this.clearMenu = false;
    }

    @Input()
    setAddActive() {
        this.domainActive = false;
        this.addActive = "active";
        this.usersActive = "";
        this.clearMenu = false;
    }

    @Input()
    setUsersActive() {
        this.domainActive = false;
        this.addActive = "";
        this.usersActive = "active";
        this.clearMenu = false;
    }


    getDomainActive() {
        var rtn = false;
        if (!this.clearMenu) {
            rtn = this.domainActive;
        }
        return rtn
    }
    
    ngAfterContentChecked() {
        this.showMenu = this._creds.checkCreds();
        if (this._menuService.isMenuClear()) {
            this.domainActive = false;
        } else if (this.addActive !== "active" && this.usersActive !== "active") {
            this.domainActive = true;
        }       
    }
    
}

