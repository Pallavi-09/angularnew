import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user:string;
  editUser:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    //this.user = this.userService.getServiceName();
    this.userService.cast.subscribe(user=>
      this.user = user
    )
  }

  editUserName(){
    this.userService.EditUser(this.editUser);
  }

}
