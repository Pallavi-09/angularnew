import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  constructor() { }

  users:string[] = ['Pallavi','Singh','Bhai','Dida'];
  
  getServiceName(){
    return this.users[0];
  }

  private nameStr = new BehaviorSubject<string>('Pallavi Work Hard');
  cast = this.nameStr.asObservable();

  EditUser(newUser){
    this.nameStr.next(newUser);
  }

}
