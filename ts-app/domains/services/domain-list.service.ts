import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Domain}           from '../../domainObjects/domain';
import {Credentials} from '../../business/credentials/credentials';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class DomainListService {
    constructor(private http: Http) { }

    private domainUrl = './rs/domain/list';  // URL to web api
    //let AUTH = "";
    getDomainList(): Observable<Domain[]> {
        let creds = new Credentials();
        let body = JSON.stringify("{}");
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + creds.getToken());
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.domainUrl, body, options)
            .do(res => console.log("Response: " + JSON.stringify(res.json()))) // eyeball results in the console
            .map(res => <Domain>res.json())
            .catch(this.handleError)
    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}