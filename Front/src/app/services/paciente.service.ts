import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { NewPacienteInterface } from 'app/interfaces/new-paciente-interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  private url = environment.apiURL;

  getpaciente() : Observable<any> {
    return this.httpClient.get(`${this.url}/paciente`)
      .pipe(res => res)
  }

  postPaciente(pacienteJson : NewPacienteInterface) : Observable<any> {
    return this.httpClient.post(`${this.url}/paciente`,pacienteJson)
      .pipe(res=>res)
  }
}