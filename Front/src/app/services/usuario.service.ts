import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
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

  getUsers(): Observable<UsuarioInterfaces[]>{
    return this._http.get<UsuarioInterfaces[]>(environment.apiURL+"/usuarios/consulta");
  }
  updateUser(userRequest: UserRequest): Observable<any>{
    return this._http.put(environment.apiURL+"user",userRequest).pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }


}
