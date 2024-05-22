import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private httpClient: HttpClient) { }

private url = "http://localhost:8486";

getcitas() : Observable<any> {
  return this.httpClient.get(`${this.url}/citas`)
    .pipe(res => res)
}
}
