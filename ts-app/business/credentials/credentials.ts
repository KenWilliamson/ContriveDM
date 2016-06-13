import {Injectable}     from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Cookie} from '../../utilities/cookies';

@Injectable()
export class Credentials {
    
   checkCreds(): boolean{
       var rtn = false;
       var creds = Cookie.getCookie("contriveDM");
       if(creds){
           rtn = true;
       }
       return rtn;
   }
   
   getToken():string{
       var token = Cookie.getCookie("contriveDM");
       return token;
   }
   setCreds(un:string, pw:string){
       var temp = un.concat(":", pw);
       var token = btoa(temp);
       Cookie.setCookie("contriveDM", token);
       Cookie.setCookie("contriveUsername", un);
   }
   getUsername():string{
       var un = Cookie.getCookie("contriveUsername");
       return un;
   }
   deleteCreds(){
       Cookie.deleteCookie("contriveDM");
       Cookie.deleteCookie("contriveUsername");
   }
}