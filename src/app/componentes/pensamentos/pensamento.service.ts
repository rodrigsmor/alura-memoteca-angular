import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly api_url = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.api_url);
  }

  cadastrar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api_url, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const request_url = `${this.api_url}/${pensamento.id}`
    return this.http.put<Pensamento>(request_url, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const request_url = `${this.api_url}/${id}`
    return this.http.delete<Pensamento>(request_url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const request_url = `${this.api_url}/${id}`
    return this.http.get<Pensamento>(request_url);
  }
}
