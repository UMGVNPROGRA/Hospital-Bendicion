import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginRequest } from 'app/interfaces/loginRequest-interfaces';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  apiRuta:string ="http://localhost:8486/login/token";

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // es el que devuelve el token, pero puede devolver el usuario cone el token
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private _http = inject(HttpClient);
  constructor() {
    //validara si el token aun es valido por el tiempo de caducidad
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token") != null);
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token") || "");

  }
  login(credentials: LoginRequest):Observable<any>{
    return this._http.post<any>(this.apiRuta,credentials).pipe(
      tap((userData)=> {
        sessionStorage.setItem("token",userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      //para que devuelve solo el token
      map((userData) => userData.token),
      catchError(this.handleError)
    );


  }
  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
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

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  get userToken():String{
    return this.currentUserData.value;
  }


}
