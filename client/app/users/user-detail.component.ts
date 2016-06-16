import {Component,  OnInit}  from '@angular/core';
import {Router, OnActivate ,RouteSegment} from '@angular/router';
import {User, UserService}   from './user.service';


@Component({
    template: `
    <div class="page-content mdl-grid">
        <div *ngIf="user" class="user-card-wide mdl-card mdl-shadow--16dp mdl-cell--12-col">
          <div class="mdl-card__title mdl-color--teal-300">
             <img class="user-detail-avatar" src="assets/img/users/user-{{user.id}}.jpg">
            <h3>{{user.name}}</h3>
          </div>
          <div class="mdl-card__supporting-text mdl-grid user-detail-row">
            <div class="mdl-cell--12-col"><i class="material-icons">email</i><span>{{user.mail}}</span></div>
            <div class="mdl-cell--12-col"><i class="material-icons">phone</i><span>{{user.phone}}</span></div>
            <div class="mdl-cell--12-col"><i class="material-icons">room</i> <span>{{user.adress}}</span></div>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">share</i>
            </button>
          </div>
        </div>
    </div>

  `,
      providers: [UserService],
})
export class UserDetailComponent implements OnActivate {
    user:User;
    errorMessage:string;

    constructor(private router:Router,
                private service:UserService) {
    }

    routerOnActivate(curr:RouteSegment):void {
        let id = +curr.getParam('id');
        this.service.getUser(id).subscribe(
            user => this.user = user,
            error =>  this.errorMessage = <any>error);
    }


    // Goto users
    gotoUsers() {
        let userId = this.user ? this.user.id : null;
        this.router.navigate(['/users', {id: userId}]);
    }
}