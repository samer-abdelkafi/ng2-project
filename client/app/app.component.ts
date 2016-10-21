import {Component} from '@angular/core';
import {SpinnerComponent} from './spiner.component';
import { Router, NavigationStart, NavigationEnd} from '@angular/router';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent { 
     
    public displySpinner:boolean = false;
    
    private timestamp : number;
    
    constructor(private router: Router) {
        //  this.router.events.pairwise().subscribe((event) => {
            
        this.router.events.subscribe((event) => {
            console.log(event);
        
        if(event instanceof NavigationStart) {
            this.displySpinner = true;
            this.timestamp = (new Date()).getTime();
            console.log("nav starting");
        } else if(event instanceof NavigationEnd) {
            var delay = (new Date()).getTime() - this.timestamp;
            delay = (delay >= 1000 ? 0 : delay);
            
            setTimeout(() => {
                this.displySpinner = false;
                console.log("nav stop");
            }, delay);
            
        }
        
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
        });
    }

}
