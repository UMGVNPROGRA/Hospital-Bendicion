import { Injectable, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { MedicoInterfaces } from 'app/interfaces/medico-interfaces';
import { MedicoRequest } from 'app/interfaces/MedicoRequest';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {


  constructor() { }

  private _http = inject(HttpClient);

  getMedicos(): Observable<MedicoInterfaces[]> {
    return this._http.get<MedicoInterfaces[]>(environment.apiURL + "/medico/consultar");
  }
  postUser(userRequest: MedicoRequest): Observable<any> {
    return this._http.post(`${environment.apiURL}/medico/registrar`, userRequest);
  }

}
