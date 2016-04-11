import {Component} from 'angular2/core';
//import {MenuComponent}   from './menu/menu.component';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@Component({
  selector: 'domain-add',
  templateUrl: "../templates/add-domain.html"
  //template: `
    
      //<h2>{{title}} details</h2>
         
  //`
  //directives: [MenuComponent]
  
})

export class AddDomainComponent implements OnInit{
  title = 'Add Domain';  
  ngOnInit() {
      
  }   
  
  getTitle(){
      return this.title;
  }
}



