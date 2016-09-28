import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}         from './home/home.comonent';
import {HomeResolver}         from './home/home.resolver';
import {HomeService}         from './home/home.service';
import {UserListComponent}     from './users/user-list.component';
import {UserDetailComponent}   from './users/user-detail.component';
import {UserDetailResolver}   from './users/user-detail.resolver';
import {UserListResolver}   from './users/user-list.resolver';
import {UserService}   from './users/user.service';


export const appRoutes : Routes =[
    {path: '',  
     component: HomeComponent,
     resolve : {
        technologies: HomeResolver
     }
    },
    {path: 'users', 
     component: UserListComponent,
     resolve : {
        users: UserListResolver
     }
    },
    {path: 'user/:id', 
     component: UserDetailComponent, 
     resolve : {
        user: UserDetailResolver
     }
    }
]

export const appRoutingProviders: any[] = [HomeResolver, UserListResolver, UserDetailResolver, HomeService, UserService];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);