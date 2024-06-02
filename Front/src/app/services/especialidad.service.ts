import { Injectable, inject } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EspecialidadesInterfaces} from "../interfaces/especialidades-interfaces";

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  private _http = inject(HttpClient);
  private url = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  getEspecialidades(): Observable<EspecialidadesInterfaces[]> {
    return this._http.get<EspecialidadesInterfaces[]>(environment.apiURL + "/api/especialidades/consultar");
  }
}
