import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { NewMedicamentos } from 'app/interfaces/new-medicamentos-interface';


@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private httpClient: HttpClient) { }

  private url = environment.apiURL;

  getMedicamentos() : Observable<any> {
    return this.httpClient.get(`${this.url}/medicamento`)
      .pipe(res => res)
  }

  postMedicamentos(medicamentoJson : NewMedicamentos) : Observable<any> {
    return this.httpClient.post(`${this.url}/medicamento`,medicamentoJson)
      .pipe(res=>res)
  }
}