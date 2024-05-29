import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

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
}