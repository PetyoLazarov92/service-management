import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../clients/clients.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  model: ClientModel;
  id : string;

  constructor(
    private toastr : ToastrService,
    private route : ActivatedRoute,
    private clientsService : ClientsService,
    private router: Router
  ) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.clientsService.getClientDetails(this.id).subscribe(clientForEdit =>{
      this.model = clientForEdit;
    })
  }

  editClient(){
    this.clientsService.editClient(this.model, this.id).subscribe(editedClient =>{
      this.toastr.success("Client edited successfully!", "Success!");
      this.router.navigate(['/clients/all']);
    })
  }

}
