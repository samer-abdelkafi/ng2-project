import {Component, OnInit}   from '@angular/core';
import { ActivatedRoute }              from '@angular/router';
import {Techno}   from './home.service';


@Component({
    templateUrl : 'app/home/home.comonent.html'
})
export class HomeComponent implements OnInit {
    
    technologies:Techno[];
    errorMessage:string;
    
    constructor(private route: ActivatedRoute) {
    }
    
    // ngOnInit() {
    //       this.service.getTechno().subscribe(
    //         technologies => this.technologies = technologies,
    //         error =>  this.errorMessage = <any>error);
    // }
    
    
    ngOnInit() {
        this.technologies = this.route.snapshot.data['technologies'];
    }

    
    
  
}