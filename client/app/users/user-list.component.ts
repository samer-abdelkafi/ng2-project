import {Component, OnInit}   from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User}   from './user.service';


@Component({
    templateUrl: 'app/users/user-list.component.html'
})
export class UserListComponent implements OnInit {
    users:User[];
    errorMessage:string;

    private selectedId:number;


    constructor(private route: ActivatedRoute,
                private router:Router) {
    }

    ngOnInit() {
        this.users = this.route.snapshot.data['users'];
    }

    isSelected(user:User) {
        return user.id === this.selectedId;
    }

    onSelect(user:User) {
        this.router.navigate(['/user', user.id]);
    }
}