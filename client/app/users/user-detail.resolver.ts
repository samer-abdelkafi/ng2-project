import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { User, UserService } from './user.service';

@Injectable()
export class UserDetailResolver implements Resolve<User> {
    constructor(
        private service: UserService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        const id = +route.params['id'];
        return this.service.getUser(id);
    }
}