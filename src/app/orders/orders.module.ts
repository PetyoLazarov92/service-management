//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

//Components
import { ordersComponents } from '.';

//Services
import { OrdersService } from './orders.service';
import { ClientsService } from '../clients/clients.service';


@NgModule({
  declarations: [
    ...ordersComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    OrdersService,
    ClientsService
  ]
})
export class OrdersModule { }
