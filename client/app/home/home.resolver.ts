import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { Techno, HomeService } from './home.service';

@Injectable()
export class HomeResolver implements Resolve<Techno[]> {
    constructor(
        private service: HomeService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Techno[]> {
        return this.service.getTechno();
    }
}