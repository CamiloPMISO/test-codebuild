import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private jwtService: JwtHelperService
  ) { }
  
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("dentro de guard")
      if (this.jwtService.isTokenExpired()) {
        console.log("expiro")
        this.router.navigate(['public/home']);
        return false;
      } else {
        console.log("bien")
        return true;
      }
  }
  
}
