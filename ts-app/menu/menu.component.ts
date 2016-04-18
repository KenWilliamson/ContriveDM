import {Component, Input, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Credentials} from '../business/credentials/credentials';
@Component({
    selector: 'menu-main',
    templateUrl: "../../templates/menus/menu.html",
    directives: [
        ROUTER_DIRECTIVES//,
        //RouterOutlet
    ],
    providers: [
        Credentials//,
        //ROUTER_PROVIDERS
    ]

})
export class MenuComponent implements OnInit {
    title = 'menu';
    domainActive = "color: white;";
    addActive = "";
    //creds = new Credentials();
    @Input() showMenu: boolean;
    
    constructor(private _creds: Credentials) { };
    ngOnInit() {
        console.log("in menu init");
    }

    getTitle() {
        return this.title;
    }

    @Input()
    setShow(show: boolean) {
        console.log("showMenu:" + this.showMenu);
        console.log("in setShow:" + show);
        this.showMenu = show;
        console.log("showMenu:" + this.showMenu);
        //this.title = "menu_____";
    }


    getShow() {
        return this.showMenu;
    }

    //showMenu(){
    // if(this.creds.checkCreds()){
    //   this.showMenu = true;
    //}else{
    //    this.showMenu = false;
    //}
    //}

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
        console.log("in ngAfterContentChecked");
        this.showMenu = this._creds.checkCreds();
    }


}



