import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model : LoginModel;
  loading: boolean = false;
  hide: boolean = false;

  constructor(private authService : AuthService) {
    this.model = new LoginModel("", "");
  }

  ngOnInit() {
  }

  login() {
    this.hide = true;
    this.loading = true;
    this.authService
      .login(this.model)
      .subscribe(d =>{},err =>{
        this.hide = false;
        this.loading = false;
      });
  }

}
