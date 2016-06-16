import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

export class User {
    constructor(public id:number, public name:string, public email:string, public phone:string, public adress:string) {
    }
}

@Injectable()
export class UserService {

    constructor (private http: Http) {}

    private _usersUrl = 'api/users';

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

    getUsers() : Observable<User[]> {
        return this.http.get(this._usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }


    getUser(id:number | string) : Observable<User> {
        return this.http.get(this._usersUrl + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
}

