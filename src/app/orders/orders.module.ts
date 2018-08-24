//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';

//Components
import { ordersComponents } from '.';

//Services
import { OrdersService } from './orders.service';


@NgModule({
  declarations: [
    ...ordersComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ],
  providers: [
    OrdersService
  ]
})
export class OrdersModule { }
