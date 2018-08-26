import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminComponents } from '.';
import { AdminService } from './admin.service';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    ...adminComponents
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
