import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  isAuth: boolean;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSrv.isAuth.subscribe(isAuth => {
      this.isAuth = isAuth;
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOut() {
    this.authSrv.logOut();
    this.router.navigate(["login"]);
  }
}
