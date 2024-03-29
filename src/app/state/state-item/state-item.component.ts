import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { State } from 'src/app/models/state';
import { StateService } from 'src/app/service/state.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-state-item',
  templateUrl: './state-item.component.html',
  styleUrls: ['./state-item.component.css']
})
export class StateItemComponent implements OnInit, OnDestroy {
  public state = new State;
  public unsubscribe = new Subject();
  public navigate = Utils.navigate
  constructor(
    public service: StateService,
    public route: Router,
    public activeRouter: ActivatedRoute
     ) { }


  ngOnInit(): void {
      this.getParams()
  }

  createState(): void {
    this.service.addState(this.state).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(
      (response) => {
        this.navigate('state', this.route);
      }
    )
  }
  public getParams(): void {
    this.activeRouter.params.pipe(
      map(
        (params: Params) => params["actions"]
      )
    ).subscribe(
      (value) => {
        if( value !== 'new') {
          this.getId(Number(value))
        }
      }
    )

  }
  getId(id: number): void {
    this.service.getId(id).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(
      (response) => {
        this.state = response
      }
    )
  }
  ngOnDestroy(): void {
    this.unsubscribe.next({})
    this.unsubscribe.complete()
  }
}
