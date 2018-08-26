import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../clients/models/client.model';
import { OrderModel } from '../models/order.model';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../clients/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.component.html',
  styleUrls: ['./orders-edit.component.css']
})
export class OrdersEditComponent implements OnInit {

  client: ClientModel;
  order: OrderModel;
  id : string;
  
  constructor(
    private route : ActivatedRoute, 
    private orderService : OrdersService, 
    private clientsService : ClientsService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.orderService.getOrderDetails(this.id).subscribe(orderForEdit =>{
      const clientId = orderForEdit.client;
      this.clientsService.getClientDetails(clientId).subscribe(client => {
        this.order = orderForEdit;
        this.client = client;
      })
    })
  }

  editOrder(){
    this.orderService.editOrder(this.order, this.id).subscribe(editedOrder =>{
      this.router.navigate(['/orders/all']);
    })
  }

}
