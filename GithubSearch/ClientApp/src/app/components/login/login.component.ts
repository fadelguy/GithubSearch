import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  invalidLogin: boolean;
  private subs: Subscription[] = [];

  constructor(private authSrv: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    if (this.loginForm.invalid) {
      this.invalidLogin = true;
      return;
    }

    this.subs.push(
      this.authSrv.login({ userName: this.loginForm.controls.username.value, password: this.loginForm.controls.password.value }).subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.authSrv.isAuth.next(true);
        this.router.navigate(["search"]);
      }, err => {
        this.invalidLogin = true;
      }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe);
  }

}
