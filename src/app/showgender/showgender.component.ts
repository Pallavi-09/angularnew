import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showgender',
  templateUrl: './showgender.component.html',
  styleUrls: ['./showgender.component.css']
})
export class ShowgenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  all:number;
  
  @Input()
  male:number;
  
  @Input()
  female:number;
}
