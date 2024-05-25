import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private _http = inject(HttpClient);

  getUsers(): Observable<UsuarioInterfaces[]>{
    return this._http.get<UsuarioInterfaces[]>(environment.apiURL+"/usuarios/consulta");
  }

}
