import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MDL} from './directives/MaterialDesignLite';
import {HomeComponent}         from './home/home.comonent';
import {UserListComponent}     from './users/user-list.component';
import {UserDetailComponent}   from './users/user-detail.component';



@Component({
    selector: 'my-app',
    template: `
   <div mdl class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Title</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" [routerLink]="['/']" >Home</a>
          <a class="mdl-navigation__link" [routerLink]="['users']">Users</a>
          <a class="mdl-navigation__link" href="">Link1</a>
          <a class="mdl-navigation__link" href="">Link2</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" [routerLink]="['/']" >Home</a>
          <a class="mdl-navigation__link" [routerLink]="['/users']">Users</a>
          <a class="mdl-navigation__link" href="">Link1</a>
          <a class="mdl-navigation__link" href="">Link2</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
       <router-outlet></router-outlet>
  </main>
</div>
  `,
    directives: [ROUTER_DIRECTIVES, MDL]
})

@Routes([
    {path: '/',  component: HomeComponent},
    {path: '/users', component: UserListComponent},
    {path: '/user/:id', component: UserDetailComponent}
])

export class AppComponent {
}
