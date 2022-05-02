import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  title = 'Ola';
  task: string = '';
  tasks: string[] = [];
  public unsubscribe = new Subject();

  ngOnInit(): void {
    alert('nasceu o todo')
    console.log('abacate')
  }

  public addTask(): void {
    this.tasks.push(this.task);
    this.task = '';
  }
  public removeTask(id: number): void{
      this.tasks.splice(id, 1)
  }
  public ola_mundo(): void {
    alert(this.title);
  }
  ngOnDestroy(): void {
    alert('morreu o todo')
    this.unsubscribe.next({})
    this.unsubscribe.complete
  }

}
