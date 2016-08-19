import {Component, OnInit}   from '@angular/core';
import {OnActivate, Router, RouteSegment, RouteTree} from '@angular/router';
import {Techno, HomeService}   from './home.service';


@Component({
    templateUrl : 'app/home/home.comonent.html',
    providers: [HomeService]
})
export class HomeComponent implements OnActivate {
    
    technologies:Techno[];
    errorMessage:string;
    
    constructor(private service:HomeService) {
    }
    
      routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
          this.service.getTechno().subscribe(
            technologies => this.technologies = technologies,
            error =>  this.errorMessage = <any>error);
    }
    
  
}