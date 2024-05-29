import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CitasI } from 'app/components/modelos/citas.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private httpClient: HttpClient) { }

  private url = environment.apiURL;
  
  getcitasById(id: number) : Observable<CitasI> {
    return this.httpClient.get<CitasI>(`${this.url}/citas/${id}`)
      .pipe(res => res)
  }
}
