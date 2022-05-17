import { state } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, from, Observable } from "rxjs";
import { State } from "../models/state";

@Injectable({providedIn: 'root'})
export class StateService {
  public readonly url: string = "http://127.0.0.1:8000/nucleo/state/";
  constructor(public http: HttpClient) {
    this.url
  }

  public getState(): Observable<State[]> {
    return this.http.get<State[]>(this.url).pipe(
      catchError((ex) => from([]))
    )
  }
  public addState(state: State): Observable<State> {
    return this.http.post<State>(this.url, state).pipe(
      catchError((ex) => from([]))
    )
  }
  public getId(id: number): Observable<State> {
    const fullUrl = `${this.url}${id}/`;
    return this.http.get<State>(fullUrl).pipe(
      catchError((ex) => from([]))
    )
  }
  public updateState(state: State, id: number): Observable<State> {
    const fullUrl = `${this.url}${id}/`;
    return this.http.patch<State>(fullUrl, state).pipe(
      catchError((ex) => from([]))
    )
  }
  public deleteState(id: Number): Observable<State> {
    const fullUrl = `${this.url}${id}/`;
    return this.http.delete<State>(fullUrl).pipe(
      catchError((ex) => from([]))
    )
  }
}
