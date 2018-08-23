import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './models/register.model';
import { LoginModel } from './models/login.model';

const appKey = "kid_B1uNxw987";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
  constructor(private http : HttpClient) {  }

  register(body : RegisterModel) {
    return this.http.post(registerUrl, body);
  }

  login(body : LoginModel) {
    return this.http.post(loginUrl, body);
  }

  logout() {
    return this.http.post(logoutUrl,{})
  }

  isAuthenticated() : boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  isAdmin() {
    if(this.user){
      return this.user.isAdmin;
    }

    return false;
  }

  get user () {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    return currentUser;
  }
}