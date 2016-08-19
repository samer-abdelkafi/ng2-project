import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

export class Techno {
    constructor(public name:string, public description:string, public website:string, public logo:string) {
    }
}


@Injectable()
export class HomeService {

    constructor (private http: Http) {}

    private technoUrl = 'assets/json/technology.json';

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return res.json();
    }

    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getTechno() : Observable<Techno[]> {
        return this.http.get(this.technoUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
}

