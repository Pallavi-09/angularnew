
import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example of CRUD (Create Read Update Delete)';
  model:any={};
  employees = [
    {name:"Mark", position:"CEO"},
    {name:"Pete", position:"COO"},
    {name:"Pallavi", position:"Developer"}
  ];
  addEmployee(){
      this.employees.push(this.model);
  }
  deleteEmp(i){
      console.log(i);
  }
}