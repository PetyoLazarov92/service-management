import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  new(body) {
    return new Observable;
  }
}
