import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CitasI } from 'app/components/modelos/citas.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private _http = inject(HttpClient);

  private url = environment.apiURL;
  
  getcitasById(id: number) : Observable<CitasI> {
    return this._http.get<CitasI>(`${this.url}/citas/${id}`)
      .pipe(res => res)
  }

  getcitasMedicamentoByCod(cod: string, est: string): Observable<any> {
    return this._http.get<any>(`${this.url}/medicamento/${cod}/${est}`);
  }



}
