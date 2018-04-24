import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) { }

  getData(): Observable<Client[]> {
    return this.http.get<Client[]>('/assets/clients.json');
  }

}
