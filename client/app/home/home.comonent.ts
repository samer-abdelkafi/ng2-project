import {Component, OnInit}   from '@angular/core';
import { Router }              from '@angular/router';
import {Techno, HomeService}   from './home.service';


@Component({
    templateUrl : 'app/home/home.comonent.html',
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
    
    technologies:Techno[];
    errorMessage:string;
    
    constructor(private service:HomeService) {
    }
    
    ngOnInit() {
          this.service.getTechno().subscribe(
            technologies => this.technologies = technologies,
            error =>  this.errorMessage = <any>error);
    }
    
  
}