import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { Observable } from 'rxjs';
import { ClientModel } from '../../clients/models/client.model';
import { ClientsService } from '../../clients/clients.service';


@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {
  order : Observable<OrderModel>;
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
    this.order = this.ordersService.getOrderDetails(this.id);
    this.ordersService.getOrderDetails(this.id).subscribe(order => {
      const clientId = order.client;
      this.clientsService.getClientDetails(clientId).subscribe(clientInfo => {
        this.client = clientInfo;
      })
    })
    
  }

}
