import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Domain}           from '../../domainObjects/domain';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class DomainListService {
    constructor(private http: Http) { }

    private domainUrl = './rs/domain/list';  // URL to web api
    //let AUTH = "";
    getDomainList() {
        let body = JSON.stringify("{}");
        let headers = new Headers();
       // headers.append('Authorization', 'Basic ' + AUTH);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.domainUrl, body, options)
            .map(res => <Domain>res.json().data)
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError)
    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}