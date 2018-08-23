import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model : RegisterModel;
  loading: boolean = false;
  hide: boolean = false;

  constructor(private authService : AuthService) { 
    this.model = new RegisterModel("", "", "","","");
  }

  ngOnInit() {
  }

  register() {
    delete this.model['confirmPassword'];
    this.hide = true;
    this.loading = true;
    this.authService
      .register(this.model)
      .subscribe(d =>{},err =>{
        this.hide = false;
        this.loading = false;
      });
  }

}
