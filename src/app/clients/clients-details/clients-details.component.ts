import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {

  client : Observable<ClientModel>;
  id : string;

  constructor(
    private route : ActivatedRoute, 
    private clientsService: ClientsService
  ) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.client = this.clientsService.getClientDetails(this.id);
  }

}
