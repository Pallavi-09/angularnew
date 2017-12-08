import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employee : any[] = [
    { code: 'EMP 101', name: 'Mr.Tom', gender:'Male', annualSalry: 5500.00, dateOfBirth: '06/01/2017'},
    { code: 'EMP 102', name: 'Mr.Alex', gender:'Male', annualSalry: 5500.00, dateOfBirth: '06/01/2017'},
    { code: 'EMP 103', name: 'Mr.Mike', gender:'Male', annualSalry: 5600.00, dateOfBirth: '06/01/2017'},
    { code: 'EMP 104', name: 'Miss.Mary', gender:'Female', annualSalry: 7600.00, dateOfBirth: '06/01/2017'},
    { code: 'EMP 105', name: 'Miss.Nancy', gender:'Female', annualSalry: 6500.00, dateOfBirth: '06/01/2017'}
  ]

  employeeCount():number {
    return this.employee.length;
  }

  maleemployeeCount():number {
    return  this.employee.filter(e => e.gender === "Male").length;
  }

  femaleemployeeCount():number {
    return  this.employee.filter(e => e.gender === "Female").length;
  }
}
