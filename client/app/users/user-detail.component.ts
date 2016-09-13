import {Component,  OnInit}      from '@angular/core';
import {Router, ActivatedRoute}  from '@angular/router';
import {User, UserService}       from './user.service';
import { Subscription }          from 'rxjs/Subscription';


@Component({
    templateUrl: 'app/users/user-detail.component.html',
    providers: [UserService],
})
export class UserDetailComponent implements OnInit {
    user: User;
    errorMessage: string;
    private sub: Subscription;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: UserService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getUser(id).subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error);
        });    
    }


    // Goto users
    gotoUsers() {
        let userId = this.user ? this.user.id : null;
        this.router.navigate(['/users', {id: userId}]);
    }
}