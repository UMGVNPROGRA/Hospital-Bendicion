import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  //el metodo sirve para interceptar el httprequest
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: String = this.loginService.userToken;
    if(token!= ""){
      //si el token es vacio, clonara la peticion
      req = req.clone({
        setHeaders:{
          //propiedades
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
      })
    }
    //para pasar al siguiente manejador que lo requiera
    return next.handle(req);
  }
}
