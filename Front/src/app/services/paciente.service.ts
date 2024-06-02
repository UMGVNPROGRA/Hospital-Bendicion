import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { NewPacienteInterface } from 'app/interfaces/new-paciente-interface';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  private url = environment.apiURL;

  getPaciente() : Observable<any> {
    return this.httpClient.get(`${this.url}/paciente`)
      .pipe(res => res)
  }

  getPacienteById(id: number) : Observable<PacienteInterfaces> {
    return this.httpClient.get<PacienteInterfaces>(`${this.url}/paciente/${id}`)
      .pipe(res => res)
  }

  postPaciente(pacienteJson : NewPacienteInterface) : Observable<any> {
    return this.httpClient.post(`${this.url}/paciente`,pacienteJson)
      .pipe(res=>res)
  }

  editarPaciente(pacienteJson : NewPacienteInterface) : Observable<any> {
    return this.httpClient.post(`${this.url}/paciente`,pacienteJson)
      .pipe(res=>res)
  }
}