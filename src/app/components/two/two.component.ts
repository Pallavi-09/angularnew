import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  secondVar:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    //this.secondVar = this.userService.getServiceName();
    this.userService.cast.subscribe(secondVar=>
      this.secondVar = secondVar
    )
  }

}
