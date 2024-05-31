import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Rol } from 'app/interfaces/rol';
import { UserRequest } from 'app/interfaces/userRequest';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { environment } from 'environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private _http = inject(HttpClient);

  getUsers(): Observable<UsuarioInterfaces[]> {
    return this._http.get<UsuarioInterfaces[]>(environment.apiURL + "/usuarios/consulta");
  }

// usuario.service.ts
updateUser(idRole: number, userRequest: UserRequest): Observable<any> {
  const url = `${environment.apiURL}/usuarios/update/${idRole}`;
  return this._http.put(url, userRequest).pipe(
    catchError(this.handleError)
  );
}

  deleteUser(idUser: number): Observable<any> {
    return this._http.delete(environment.apiURL + "/usuarios/delete/" + idUser);

  }
  postUser(userRequest: UserRequest): Observable<any> {
    return this._http.post(`${environment.apiURL}/usuarios/registrar`, userRequest);
  }

  //obtener roles
  getRoles(): Observable<Rol[]> {
    return this._http.get<Rol[]>(environment.apiURL + "/rol/consulta");
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    }
    else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }


}
