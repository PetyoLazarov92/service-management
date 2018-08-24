import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {
  model: ClientModel;
  loading: boolean = false;
  hide: boolean = false;

  constructor(private clientsService : ClientsService) { 
    this.model = new ClientModel("","","","");
  }

  ngOnInit() {
  }

  newClient(){
    this.hide = true;
    this.loading = true;
    this.clientsService
      .new(this.model)
      .subscribe(d =>{},err =>{
        this.hide = false;
        this.loading = false;
      });
  }

}
