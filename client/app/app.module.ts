import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { MdlModule }            from 'angular2-mdl';

import { AppComponent }         from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';
import {HomeComponent}          from './home/home.comonent';
import {UserListComponent}      from './users/user-list.component';
import {UserDetailComponent}    from './users/user-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    MdlModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserDetailComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})




export class AppModule {
}
