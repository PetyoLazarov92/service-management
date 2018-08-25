import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
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
  clients : Observable<ClientModel[]>;
  client: ClientModel;
  order: OrderModel;

  constructor(
    private orderService : OrdersService, 
    private clientsService : ClientsService, 
    private router: Router) {
      this.client = new ClientModel("","",[],"","");
      this.order = new OrderModel("","","","","","","","","","","","","");
   }

  ngOnInit() {
    this.clients = this.clientsService.getAllClients();
  }

  newOrder(){
    this.orderService
      .newOrder(this.order)
      .subscribe(order =>{
        let orderId = order['_id'];

        if(this.order.client === "newClient"){          
          this.client.orders.push(orderId);
            this.clientsService.newClient(this.client).subscribe(user => {
              let userId = user['_id'];
              this.order.client = userId;
              this.orderService.editOrder(this.order, orderId).subscribe(editedOrder =>{
              
              })
            })
        } else{
          let clientId = this.order.client
          this.clientsService.getClientDetails(clientId).subscribe(existingClientDetails => {
            this.client = existingClientDetails;
            this.client.orders.push(orderId);
            this.clientsService.editClient(this.client, clientId).subscribe(editedClient =>{
              
            })
          })
        }
        this.router.navigate(['/orders/all']);
      },err =>{
        
      });
  }

}
