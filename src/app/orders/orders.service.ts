import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from './models/order.model';

const appKey = "kid_B1uNxw987";
const newOrderUrl = `https://baas.kinvey.com/appdata/${appKey}/orders`;
const editOrderUrl = `https://baas.kinvey.com/appdata/${appKey}/orders/`;

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  newOrder(body: OrderModel) {
    return this.http.post(newOrderUrl, body);
  }
  editOrder(body : OrderModel, id : string){
    return this.http.put(editOrderUrl + id, body);
  }
}
