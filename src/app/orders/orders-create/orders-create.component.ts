import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../clients/models/client.model';
import { OrdersService } from '../orders.service';
import { OrderModel } from '../models/order.model';
import { ClientsService } from '../../clients/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.css']
})
export class OrdersCreateComponent implements OnInit {
  client: ClientModel;
  order: OrderModel;

  constructor(
    private orderService : OrdersService, 
    private clientService : ClientsService, 
    private router: Router) {
      this.client = new ClientModel("","","","","");
      this.order = new OrderModel("","","","","","","","","","","","","");
   }

  ngOnInit() {
  }

  newOrder(){
    this.orderService
      .newOrder(this.order)
      .subscribe(order =>{

        let orderId = order['_id'];
        this.client.orders = orderId;
        this.clientService.newClient(this.client).subscribe(user => {

          let userId = user['_id'];
          this.order.client = userId;
          this.orderService.editOrder(this.order, orderId).subscribe(editedOrder =>{

          })
        })
        this.router.navigate(['/orders/all']);
      },err =>{
        
      });
  }

}
