import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, from, Observable } from "rxjs";
import { Zone } from "../models/zone";

@Injectable({providedIn: 'root'})
export class ZoneService {
  public readonly url: string = "http://127.0.0.1:9000/nucleo/zone/";
  constructor(public http: HttpClient) {
    this.url
  }

  public getZone(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.url).pipe(
      catchError((ex) => from([]))
    )
  }
}
