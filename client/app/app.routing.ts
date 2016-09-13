import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}         from './home/home.comonent';
import {UserListComponent}     from './users/user-list.component';
import {UserDetailComponent}   from './users/user-detail.component';


export const appRoutes : Routes =[
    {path: '',  component: HomeComponent},
    {path: 'users', component: UserListComponent},
    {path: 'user/:id', component: UserDetailComponent}
]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);