import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // loading: boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  
  logout() {
    this.authService.logout().subscribe();
  }
}
