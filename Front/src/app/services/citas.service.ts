import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EnvioCitasInterfaces} from '../interfaces/envio-citas-interfaces'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private httpClient: HttpClient) { }

private url = environment.apiURL;

getcitas() : Observable<any> {
  return this.httpClient.get(`${this.url}/citas`)
    .pipe(res => res)
}

getcitasByMedico(idMed : string) : Observable<any> {
    return this.httpClient.get(`${this.url}/citas/citasbymedico/${idMed}`)
      .pipe(res => res)
  }

postCita(citaJson : EnvioCitasInterfaces) : Observable<any> {
  return this.httpClient.post(`${this.url}/citas`,citaJson)
    .pipe(res=>res)
}
}
