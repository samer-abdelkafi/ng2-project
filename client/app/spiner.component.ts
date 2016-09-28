import {Component}      from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
})
export class SpinnerComponent {
    
    constructor(router:Router) {
        console.log("construct spinner");
      router.events.subscribe((event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
            console.log("nav starting");
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
    }
}