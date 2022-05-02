import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  nome: string = "Samuel"
  linguas: string[] = ['Ingles','france','Alemão','Espanhol']
  cursos: string[] = ['informatica basica', 'pintura', 'angular']
  constructor() { }

  ngOnInit(): void {
    alert('nasceu o curriculo')
  }

}
