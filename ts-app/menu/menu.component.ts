import {Component, Input, OnInit} from '@angular/core';
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
    domainActive = "color: white;";
    addActive = "";
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
        this.domainActive = "color: white;";
        this.addActive = "";
        this.clearMenu = false;
    }

    @Input()
    setAddActive() {
        this.domainActive = "";
        this.addActive = "active";
        this.clearMenu = false;
    }

   
    getDomainActive() {
        var rtn = "";
        if (!this.clearMenu) {
            rtn = this.domainActive;
        }
        return rtn
    }

    ngAfterContentChecked() {        
        this.showMenu = this._creds.checkCreds();
        if(this._menuService.isMenuClear()){
            this.domainActive = "";
        }else if(this.addActive !== "active"){
            this.domainActive = "color: white;";
        }        
    }
}

