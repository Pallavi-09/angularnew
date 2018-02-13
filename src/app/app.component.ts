
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  details : any[] = [
    {id : "1", Name : "Pallavi", Count : 34},
    {id : "2", Name : "Adam", Count : 8},
    {id : "3", Name : "Nancy", Count : 12},
    {id : "4", Name : "Pete", Count : 18},
    {id : "5", Name : "Mark", Count : 4},
    {id : "6", Name : "park", Count : 14},
    {id : "7", Name : "advik", Count : 4},    
  ]
  // model:any={};
  // name : string = '';
  // age : number;
  // found : boolean;
  // postfond : boolean;
  // postname : string = '';
  // postage : string = '';
  // birthday = new Date(1992,7,9);
  // myBirth = new Date(1992,9,7);
  // toggle = true;
  // @Input() inputString:string;
  // userStr:string='Pallavi';
  // employees = [
  //   {name:"Mark", position:"CEO"},
  //   {name:"Pete", position:"COO"},
  //   {name:"Pallavi", position:"Developer"}
  // ];
  // namesList = ['Mark', 'Pete', 'Pallavi'];
  // addEmployee(){
  //     this.employees.push(this.model);
  // }
  // deleteEmp(i){
  //     console.log(i);
  // }

  // constructor (private httpClient:HttpClient){}
  // getName(event:any){
  //     this.name = event.target.value;
  // }
  // getProfile(){
  //   this.httpClient.get(`https://my-json-server.typicode.com/Pallavi-09/angularnew/profiles/?name=${this.name}`)
  //   .subscribe(
  //     (data:any[]) => {
  //       if(data.length){
  //         this.age = data[0].age;
  //         this.found = true;
  //       }    
  //     }
  //   )
  // }
  // postProfile(){
  //   this.httpClient.post(`https://my-json-server.typicode.com/Pallavi-09/angularnew/profiles/`, {
  //     'name':'Mom',
  //     'age': 51
  //   })
  //   .subscribe(
  //     (data:any) => {
  //       this.postname = data.name;    
  //       this.postage = data.age;
  //       this.postfond = true;       
  //     }
  //   )
  // }
  // get format()   { 
  //     return this.toggle ? 'shortDate' : 'fullDate'; 
  // }
  // toggleFunc() { 
  //   this.toggle = !this.toggle; 
  // }
}