import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Minion } from '../interfaces/minion';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {

  private url:string = 'http://localhost:3000/minions';

  constructor(private httpClient: HttpClient) { }

  getMinions():Observable<Minion[]>{
    return this.httpClient.get<Minion[]>(this.url)
  }

  getMinionById(id:string):Observable<Minion>{
    return this.httpClient.get<Minion>(this.url + '/' + id)
  }
}
