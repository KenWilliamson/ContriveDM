import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Domain}           from '../../domainObjects/domain';
import {ServiceResponse}           from '../../domainObjects/service-response';
import {Credentials} from '../../business/credentials/credentials';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class DeleteDomainService {
    constructor(private http: Http) { }

    private domainUrl = './rs/domain';  // URL to web api

    //let AUTH = "";
    getDomain(id: string): Observable<Domain> {
        let getUrl = this.domainUrl + ("/" + id);
        let creds = new Credentials();
        // let body = JSON.stringify("{}");
        //let params = new URLSearchParams();
        //params.set('id', id);
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + creds.getToken());
        let options = new RequestOptions({ headers: headers });

        return this.http.get(getUrl, options)
            .do(res => console.log("Response: " + JSON.stringify(res.json()))) // eyeball results in the console
            .map(res => <Domain>res.json())
            .catch(this.handleError)
    }

    //let AUTH = "";
    deleteDomain(id: string): Observable<ServiceResponse> {
        let deleteUrl = this.domainUrl + ("/" + id);
        let creds = new Credentials();
        // let body = JSON.stringify("{}");
        //let params = new URLSearchParams();
        //params.set('id', id);
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + creds.getToken());
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(deleteUrl, options)
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