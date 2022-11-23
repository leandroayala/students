import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Aqui eu to definindo um valor para o array de students, com somente um objeto nesse array students
  studentsList = [{type: 'approved', name: 'jose', description: 'Masculino'}];

}
