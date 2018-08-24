//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';

//Services
import { ClientsService } from './clients.service';

//Components
import { clientsComponents } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule
  ],
  declarations: [
    ...clientsComponents
  ],
  providers: [
    ClientsService
  ]
})
export class ClientsModule { }
