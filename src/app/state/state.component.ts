import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { State } from '../models/state';
import { StateService } from '../service/state.service';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})


export class StateComponent implements OnInit, OnDestroy {
  public states: State[] = [];
  public unsubscribe = new Subject;
  public navigate = Utils.navigate;
  constructor(public service: StateService, public router: Router) { }

  ngOnInit(): void {
    this.getState();
  }

  public getState(): void {
    this.service.getState().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(
      (response) => {
        this.states = response
      }
    )
  }
  deleteState(id: number): void {
    this.service.deleteState(id).subscribe(
      (response) => {
        this.navigate('state', this.router)
      }
    )
  }
  ngOnDestroy(): void {
    this.unsubscribe.next({});
    this.unsubscribe.complete();
  }

}
