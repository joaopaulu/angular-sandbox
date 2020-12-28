import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

const baseUrl = 'http://localhost:8081/api/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(baseUrl, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return null;
  }
}
