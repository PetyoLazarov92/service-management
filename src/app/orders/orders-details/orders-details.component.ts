import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { ClientModel } from '../../clients/models/client.model';
import { ClientsService } from '../../clients/clients.service';


@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {
  order : OrderModel;
  client : ClientModel;
  id : string;
  constructor(
    private route : ActivatedRoute, 
    private ordersService : OrdersService,
    private clientsService: ClientsService
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.ordersService.getOrderDetails(this.id).subscribe(orderInfo => {
      this.order = orderInfo;
      const clientId = orderInfo.client;
      this.clientsService.getClientDetails(clientId).subscribe(clientInfo => {
        this.client = clientInfo;
      })
    })
    
  }

}
