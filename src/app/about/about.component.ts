import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  ary = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit(){}
}
