import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // loading: boolean = false;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
