import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private http:HttpClient) { }

  BASE_URL = 'BACKEND_PHP_NEURO/'

  contador_get(){
    return this.http.get(this.BASE_URL+'index.php', { responseType: 'text' })
  }
}
