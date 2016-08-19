import {Component,  OnInit}  from '@angular/core';
import {Router, OnActivate ,RouteSegment} from '@angular/router';
import {User, UserService}   from './user.service';


@Component({
      templateUrl: 'app/users/user-detail.component.html',
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