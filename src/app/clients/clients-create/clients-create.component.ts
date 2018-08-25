import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { ClientsService } from '../clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {
  model: ClientModel;
  loading: boolean = false;
  hide: boolean = false;

  constructor(private clientsService : ClientsService, private router: Router) { 
    this.model = new ClientModel("","","","","");
  }

  ngOnInit() {
  }

  newClient(){
    this.hide = true;
    this.loading = true;
    this.clientsService
      .newClient(this.model)
      .subscribe(d =>{
        this.router.navigate(['/clients/all']);
      },err =>{
        this.hide = false;
        this.loading = false;
      });
  }

}
