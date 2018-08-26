import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Observable } from 'rxjs';
import { OrdersService } from '../../orders/orders.service';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  client : Observable<ClientModel>;
  id : string;
  ordersNames : Array<string> = new Array();

  constructor(
    private route : ActivatedRoute, 
    private clientsService: ClientsService,
    private ordersService: OrdersService
  ) { 
    this.id = this.route.snapshot.params['id'];
  }

  async ngOnInit() {
    this.client = this.clientsService.getClientDetails(this.id);
    await this.client.subscribe(async client => {
      const orders : Array<string> = client.orders;
      if(orders){
      for(let i=0; i <= orders.length-1; i++ ){
        const orderId = orders[i];
         await this.ordersService.getOrderDetails(orderId).subscribe(async orderInfo => {
          console.log(orderInfo);
          await this.ordersNames.push(orderInfo.type + ' ' + orderInfo.brand);
          
        })
      }
    }
      console.log(this.ordersNames);
    })
  }

}
