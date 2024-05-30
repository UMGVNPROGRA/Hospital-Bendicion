import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitasI } from 'app/components/modelos/citas.interface';
import { Observable } from 'rxjs/internal/Observable';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:8486/';

  constructor(private http: HttpClient) {}

  ListadoCitas(): Observable<CitasI[]> {
    let seccion = 'citas';
    let direccion = this.url + seccion;
    //console.log(direccion);
    return this.http.get<CitasI[]>(direccion);
  }

  CrearFactura(token: any) {
    let seccion = 'facturas';
    let direccion = this.url + seccion;
    //console.log(direccion);
    return this.http.post<any>(direccion, token);
  }

  ListadoPaciente():Observable<PacienteInterfaces[]> {
    let seccion = "paciente";
    let direccion = this.url + seccion;
    return this.http.get<PacienteInterfaces[]>(direccion);
  }


}
