import {Component, OnInit}   from '@angular/core';
import {OnActivate, Router, RouteSegment, RouteTree} from '@angular/router';
import {User, UserService}   from './user.service';


@Component({
    templateUrl: 'app/users/user-list.component.html',
    providers: [UserService],
})
export class UserListComponent implements OnActivate {
    users:User[];
    errorMessage:string;

    private selectedId:number;


    constructor(private service:UserService,
                private router:Router) {
    }

    routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
        this.selectedId = +curr.getParam('id');
        this.service.getUsers().subscribe(
            users => this.users = users,
            error =>  this.errorMessage = <any>error);
    }


    isSelected(user:User) {
        return user.id === this.selectedId;
    }

    onSelect(user:User) {
        this.router.navigate(['/user', user.id]);
    }
}