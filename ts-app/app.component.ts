import {Component} from 'angular2/core';
//import {Hero} from './hero'
@Component({
  selector: 'contirve-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite Domain is test.com</h2>
  
  
`
})
export class AppComponent {
  title = 'ContriveDM';  
  
  
  getTitle(){
      return this.title;
  }
}



