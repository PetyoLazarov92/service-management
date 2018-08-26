import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './models/user.model';

const appKey = "kid_B1uNxw987";
const allUserUrl = `https://baas.kinvey.com/user/${appKey}?sort={"firstName": 1}`

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<UserModel[]>(allUserUrl);
  }
}
