import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { Observable } from 'rxjs'
import { ClientsService } from '../clients.service';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients-all',
  templateUrl: './clients-all.component.html',
  styleUrls: ['./clients-all.component.css']
})
export class ClientsAllComponent implements OnInit {
  clients : Observable<ClientModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private clientsService : ClientsService,
    private authService: AuthService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.clients = this.clientsService.getAllClients();
  }

  changePage(page){
    this.currentPage = page;
  }

  deleteItem(id: string) {
    this.clientsService.deleteClient(id)
      .subscribe(() => {
        this.clients = this.clientsService.getAllClients();
        this.toastr.success('Client Deleted!', "Warning!");
      })
  }

}
