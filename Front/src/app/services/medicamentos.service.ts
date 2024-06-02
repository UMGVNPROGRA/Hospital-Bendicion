import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { NewMedicamentos } from 'app/interfaces/new-medicamentos-interface';
import { Medicamentos } from 'app/interfaces/medicamentos-interface';


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

  postMedicamentos(medicamentoJson : Medicamentos) : Observable<any> {
    return this.httpClient.post(`${this.url}/medicamento`,medicamentoJson)
      .pipe(res=>res)
  }


  getById(id: number) : Observable<Medicamentos> {
    return this.httpClient.get<Medicamentos>(`${this.url}/medicamento/${id}`)
      .pipe(res => res)
  }

  editarMedicamentos(medicamentoJson : Medicamentos) : Observable<any> {
    return this.httpClient.put(`${this.url}/medicamento/${1}`,medicamentoJson)
      .pipe(res=>res)
  }
}