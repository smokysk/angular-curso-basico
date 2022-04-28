import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'Ola';
  task: string = '';
  tasks: string[] = [];

  ngOnInit(): void {
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


}
