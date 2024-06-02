import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EspecialidadesInterfaces} from "../interfaces/especialidades-interfaces";

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  private url = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  especialidades() : Observable<EspecialidadesInterfaces []> {
    return this.httpClient.get<EspecialidadesInterfaces[]>(`${this.url}/api/especialidades/consultar`)
      .pipe(res => res)
  }
}
