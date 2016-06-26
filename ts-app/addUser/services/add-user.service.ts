import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {User}           from '../../domainObjects/user';
import {ServiceResponse}           from '../../domainObjects/service-response';
import {Credentials} from '../../business/credentials/credentials';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class AddUserService {
    constructor(private http: Http) { }

    private userUrl = './rs/user';  // URL to web api
        
    
    addUser(json): Observable<ServiceResponse> {        
        let creds = new Credentials();        
        let body = JSON.stringify(json);        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');  
        headers.append('Authorization', 'Basic ' + creds.getToken());
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.userUrl, body, options)
            .do(res => console.log("Response: " + JSON.stringify(res.json()))) // eyeball results in the console
            .map(res => <ServiceResponse>res.json())
            .catch(this.handleError)
    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}