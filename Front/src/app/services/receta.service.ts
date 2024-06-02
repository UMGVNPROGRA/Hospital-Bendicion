import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CitasI } from 'app/components/modelos/citas.interface';
import { CitasInterfaces } from 'app/interfaces/citas-interfaces';
import { Recetas, RecetasConsulta, RecetasConsultaEditar } from 'app/interfaces/recetas';
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

  getRecetasById(id: number) : Observable<Recetas> {
    return this._http.get<Recetas>(`${this.url}/recetas/${id}`)
      .pipe(res => res)
  }

  getcitasMedicamentoByCod(cod: string, est: string): Observable<any> {
    return this._http.get<any>(`${this.url}/medicamento/${cod}/${est}`).pipe(res=>res);
  }

  getRecetaByMed(id_receta: number): Observable<any> {
    return this._http.get<any>(`${this.url}/recetas/${id_receta}/0`).pipe(res=>res);
  }

  getRecetaEditar(id_receta: number): Observable<RecetasConsultaEditar[]> {
    return this._http.get<RecetasConsultaEditar[]>(`${this.url}/recetas/${id_receta}/0/0`).pipe(res=>res);
  }

  getRecetas(): Observable<RecetasConsulta[]> {
    return this._http.get<RecetasConsulta[]>(`${this.url}/recetas`).pipe(res=>res);
  }

  saveReceta(receta: Recetas) : Observable<any> {
    return this._http.post(`${this.url}/recetas`,receta)
      .pipe(res=>res)
  }

  Editar(id:number,receta: Recetas) : Observable<any> {
    return this._http.put(`${this.url}/recetas/${id}`,receta)
      .pipe(res=>res)
  }

}
