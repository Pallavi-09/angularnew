import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:any[]=[
    {name:'Pallavi'},
    {name:'Dewang'},
    {name:'Ruhi'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
