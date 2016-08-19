import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MDL} from './directives/MaterialDesignLite';
import {HomeComponent}         from './home/home.comonent';
import {UserListComponent}     from './users/user-list.component';
import {UserDetailComponent}   from './users/user-detail.component';



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, MDL]
})

@Routes([
    {path: '/',  component: HomeComponent},
    {path: '/users', component: UserListComponent},
    {path: '/user/:id', component: UserDetailComponent}
])

export class AppComponent {
}
