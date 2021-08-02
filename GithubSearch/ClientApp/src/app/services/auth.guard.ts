import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authSrv: AuthService, private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      if (!this.authSrv.isAuth.value) {
        this.authSrv.isAuth.next(true)
      }
      return true;
    }
    this.authSrv.logOut();
    this.router.navigate(["login"]);
    return false;
  }
}
