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

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(baseUrl + `/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl);
  }

  getClientesById(id: number): Observable<Cliente> {
    return this.http.get<any>(baseUrl + `/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<Cliente>(baseUrl + `/${cliente.id}`);
  }
}
