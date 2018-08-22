import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from './models/signup.model';
import { SignInModel } from './models/signin.model';

const appKey = "kid_B1uNxw987";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
  constructor(private http : HttpClient) {  }

  register(body : SignUpModel) {
    return this.http.post(registerUrl, body);
  }

  login(body : SignInModel) {
    return this.http.post(loginUrl, body);
  }

  logout() {
    localStorage.clear();
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