import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "src/app/authentication/service/auth.service";


@Injectable({
    providedIn:'root'
})
export class AdminCanActivate implements CanActivate{

    constructor(private authServ:AuthService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        return this.authServ.AllowAccessToken().pipe(map(data=>{
            if(data?.role == 'Admin')
            return true
            else return this.router.createUrlTree(['home']);
        }))

    }


}