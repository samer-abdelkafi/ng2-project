import {Component} from '@angular/core';
import {MDL} from './directives/MaterialDesignLite';
import {SpinnerComponent} from './spiner.component';
import { Router, NavigationStart, NavigationEnd} from '@angular/router';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent { 
     
    public displySpinner:boolean = false;
    
    constructor(private router: Router) {
        //  this.router.events.pairwise().subscribe((event) => {
            
        this.router.events.subscribe((event) => {
            console.log(event);
        
        if(event instanceof NavigationStart) {
            this.displySpinner = true;
            console.log("nav starting");
        }
        
        if(event instanceof NavigationEnd) {
            this.displySpinner = false;
            console.log("nav stop");
        }
        
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
        });
    }

}
