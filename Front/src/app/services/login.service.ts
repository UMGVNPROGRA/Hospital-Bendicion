import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from 'app/interfaces/AuthResponse';
import { LoginRequest } from 'app/interfaces/loginRequest-interfaces';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  apiRuta: string = "http://localhost:8486/login/token";

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // es el que devuelve el token, pero puede devolver el usuario cone el token
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>("");
  //almacenar role y usuario

  currentUserRole: BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentUsername: BehaviorSubject<string> = new BehaviorSubject<string>("");

  private _http = inject(HttpClient);

  constructor() {
    //validara si el token aun es valido por el tiempo de caducidad
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token") != null);
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token") || "");

    this.currentUserRole = new BehaviorSubject<string>(sessionStorage.getItem("role") || "");
    this.currentUsername = new BehaviorSubject<string>(sessionStorage.getItem("username") || "");
  }
  login(credentials: LoginRequest): Observable<any> {
    return this._http.post<AuthResponse>(this.apiRuta, credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem("token", userData.token);
        sessionStorage.setItem("role", userData.role);
        sessionStorage.setItem("username", userData.username);
        this.currentUserData.next(userData.token);
        this.currentUserRole.next(userData.role);
        this.currentUsername.next(userData.username);
        this.currentUserLoginOn.next(true);


      }),

      //para que devuelve solo el token
      map((userData) => userData.token),
      catchError(this.handleError)
    );


  }
  logout(): void {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("username");
    this.currentUserData.next("");
    this.currentUserRole.next("");
    this.currentUsername.next("");
    this.currentUserLoginOn.next(false);

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



  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }
  //para acceder al token
  get userToken(): String {
    return this.currentUserData.value;
  }
  get userData(): Observable<String> {
    return this.currentUserData.asObservable();
  }

  get userRole(): Observable<string> {
    return this.currentUserRole.asObservable();
  }

  get username(): Observable<string> {
    return this.currentUsername.asObservable();
  }

  // Para acceder directamente al valor del role
  get userRoleValue(): string {
    return this.currentUserRole.value;
  }

  // Para acceder directamente al valor del username
  get usernameValue(): string {
    return this.currentUsername.value;
  }



}
