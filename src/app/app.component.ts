
import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

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
  namesList = ['Mark', 'Pete', 'Pallavi'];
  addEmployee(){
      this.employees.push(this.model);
  }
  deleteEmp(i){
      console.log(i);
  }

  constructor (private httpClient:HttpClient){}
}