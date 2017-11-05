import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  @Input() namesList:string;
  nameValue:string = '';
  constructor() { }

  ngOnInit() {
  }

  eventFromInner(passed){
    this.nameValue = passed;
  }
}
