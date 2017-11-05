import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-name-container',
  templateUrl: './name-container.component.html',
  styleUrls: ['./name-container.component.css']
})
export class NameContainerComponent implements OnInit {
  contain = ['Roli', 'Pallavi', 'Parul', 'Dewang' ];
  constructor() { }

  ngOnInit() {
  }

}
