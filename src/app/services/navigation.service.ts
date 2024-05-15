import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class NavigationService{


    // allowLinks!:string [];

    // constructor(private router: Router) {
    // this.router.events
    //     .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     filter((event: NavigationEnd) => !this.isAllowedLink(event.urlAfterRedirects))
    //   )
    //     .subscribe((event) => {
    //     this.handleNavigation(event);
    //     });
    // }


    // private handleNavigation(event: NavigationEnd): void {
    //     const url = event.urlAfterRedirects;
    //     if (!this.isAllowedLink(url)) {
    //       this.performAction();
    //     }
    //   }
    
    //   private isAllowedLink(url: string): boolean {
    //     return this.allowedLinks.includes(url);
    //   }
    
    //   private performAction(): void {
    //     // Replace this with the action you want to perform
    //     console.log('Navigated to an unallowed link!');
    //     // For example, navigate to a default route
    //     // this.router.navigate(['/home']);
    //   }

}