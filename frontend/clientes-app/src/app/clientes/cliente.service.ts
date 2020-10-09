import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CLIENTES } from './clientes.json';

import { Cliente } from './cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{
    return of(CLIENTES);
  }

}
