import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CitasI } from 'app/components/modelos/citas.interface';
import { CitasInterfaces } from 'app/interfaces/citas-interfaces';
import { Recetas } from 'app/interfaces/recetas';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private _http = inject(HttpClient);

  private url = environment.apiURL;
  
  getcitasById(id: number) : Observable<CitasInterfaces> {
    return this._http.get<CitasInterfaces>(`${this.url}/citas/${id}`)
      .pipe(res => res)
  }

  getcitasMedicamentoByCod(cod: string, est: string): Observable<any> {
    return this._http.get<any>(`${this.url}/medicamento/${cod}/${est}`).pipe(res=>res);
  }

  getRecetaByMed(id_receta: number, id_medico: number): Observable<any> {
    return this._http.get<any>(`${this.url}/recetas/${id_receta}/${id_medico}`).pipe(res=>res);
  }

  saveReceta(receta: Recetas) : Observable<any> {
    return this._http.post(`${this.url}/recetas`,receta)
      .pipe(res=>res)
  }

}
