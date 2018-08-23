import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private currentUser = JSON.parse(localStorage.getItem('currentUser'));

  username = this.currentUser ? this.currentUser['username'] : undefined;

  constructor() { }

  ngOnInit() {
  }
}
