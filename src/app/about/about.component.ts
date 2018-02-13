import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: `<h3>{{mainStr}}</h3><button (click)="sendMsg()">Click Me</button>`
})
export class AboutComponent implements OnInit {


  @Input('passStr') mainStr:string;

  @Output()
  outputVal: EventEmitter<string> = new EventEmitter<string>();
  textMsg = "passed by child";
  



  constructor() { }

  ngOnInit() {
    
    
    
  }
  sendMsg(){
    this.outputVal.emit(this.textMsg);
  }

}
