import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, from, Observable } from "rxjs";
import { District } from "../models/district";
import { State } from "../models/state";

@Injectable({providedIn: 'root'})
export class DistrictService {
  public readonly url: string = "http://127.0.0.1:9000/nucleo/district/";
  constructor(public http: HttpClient) {
    this.url
  }

  public getDistrict(): Observable<District[]> {
    return this.http.get<District[]>(this.url).pipe(
      catchError((ex) => from([]))
    )
  }
}
