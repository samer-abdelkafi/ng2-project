import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { User, UserService } from './user.service';

@Injectable()
export class UserListResolver implements Resolve<User[]> {
    constructor(
        private service: UserService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
        return this.service.getUsers();
    }
}