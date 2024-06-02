import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private httpClient: HttpClient) { }

  private url = environment.apiURL;

  getMedicos(): Observable<any> {
    return this.httpClient.get(`${this.url}/api/medico/consultar`)
      .pipe(res => res)
  }
}
