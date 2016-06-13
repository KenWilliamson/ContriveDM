import {Component} from '@angular/core';

@Component({
  selector: 'domain-add',
  templateUrl: "../templates/add-domain.html"    
})

export class AddDomainComponent implements OnInit{
  title = 'Add Domain';  
  ngOnInit() {      
  }   
  
  getTitle(){
      return this.title;
  }
}



