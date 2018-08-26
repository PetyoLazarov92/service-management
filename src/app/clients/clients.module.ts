//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

//Services
import { ClientsService } from './clients.service';
import { OrdersService } from '../orders/orders.service';

//Components
import { clientsComponents } from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [
    ...clientsComponents
  ],
  providers: [
    ClientsService,
    OrdersService
  ]
})
export class ClientsModule { }
