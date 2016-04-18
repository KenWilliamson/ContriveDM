import {Component, OnInit} from 'angular2/core';
import {MenuComponent}   from '../menu/menu.component';
import {Credentials} from '../business/credentials/credentials';
import {AddDomainComponent}   from '../addDomain/add-domain.component';
import {Router } from 'angular2/router';
//import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
@Component({
    selector: 'domain-list',
    templateUrl: "../templates/domains.html",
    
    //directives: [
      //  ROUTER_DIRECTIVES,
       // MenuComponent
   // ],
    providers: [
       // ROUTER_PROVIDERS,
        Credentials,
        MenuComponent
    ]
    
    

})


export class DomainListComponent implements OnInit {
    title = 'Domains';    
    //menu = new MenuComponent();
    //this.menu.showMenu();
    //constructor(
        //this.menu.showMenu()
        //console.log("in domains");
    //)
    constructor(private _creds: Credentials, private _router: Router){ };
    //constructor(private _creds: Credentials){ };
     ngOnInit() {
         if(!this._creds.checkCreds()){
             console.log("not logged in");
             this._router.navigate(['Login']);
         }
         //this._menu.setShow(false);
         //console.log("Show the menu:" +this._menu.getShow());
         //console.log("in onInit of domain list. Logged in: " + this._creds.checkCreds());
         //this._menu.showMenu = true;
     }
    
    getTitle() {
        return this.title;
    }
}



