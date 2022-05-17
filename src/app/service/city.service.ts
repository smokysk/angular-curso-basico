import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, from, Observable } from "rxjs";
import { City } from "../models/city";
import { District } from "../models/district";
import { State } from "../models/state";

@Injectable({providedIn: 'root'})
export class CityService {
  public readonly url: string = "http://127.0.0.1:8000/nucleo/city/";
  constructor(public http: HttpClient) {
    this.url
  }

  public getCity(): Observable<City[]> {
    return this.http.get<City[]>(this.url).pipe(
      catchError((ex) => from([]))
    )
  }
}
