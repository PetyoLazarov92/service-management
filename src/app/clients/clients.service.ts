import { Injectable } from '@angular/core';
import { ClientModel } from './models/client.model';
import { HttpClient } from '@angular/common/http';

const appKey = "kid_B1uNxw987";
const newClientUrl = `https://baas.kinvey.com/appdata/${appKey}/clients`;
//all clients sorted in alphabetical order
const allClientsUrl = `https://baas.kinvey.com/appdata/${appKey}/clients?sort={"name": 1}`;
const deleteClientUrl = `https://baas.kinvey.com/appdata/${appKey}/clients`;

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) { }

  newClient(body : ClientModel) {
    return this.http.post(newClientUrl, body);
  }

  getAllClients() {
    return this.http.get<ClientModel[]>(allClientsUrl);
  }

  deleteClient(id: string){
    return this.http.delete(deleteClientUrl + id);
  }
}
