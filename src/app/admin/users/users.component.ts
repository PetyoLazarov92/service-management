import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModel[];
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  changePage(page){
    this.currentPage = page;
  }

}
