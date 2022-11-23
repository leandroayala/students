import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //Esse decorator indica que essa propriedade pode ser utilizada por um componente pai
  @Input() student: {type: string, name: string, description: string}

  constructor() { }

  ngOnInit(): void {
  }

}
