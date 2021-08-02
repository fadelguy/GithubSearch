import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  login(user: IUser) {;
    return this.http.post(this.baseUrl + 'api/auth/login', user)
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

}
