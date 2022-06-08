import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  BASE_URL = 'BACKEND_PHP_NEURO/'

  enviar_consulta_post(data:any){
    return this.http.post<any>(this.BASE_URL+'consultas_controller.php', data);
  }

  enviar_pqrs_post(data:any){
    return this.http.post<any>(this.BASE_URL+'pqrs_controller.php', data);
  }
}

