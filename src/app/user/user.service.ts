import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Ykä', 'Ykkönen'),
      new User('Kaaleppi', 'Kakkonen'),
      new User ('Kikka', 'Kolmonen'),
      new User ('Neppu', 'Nelonen')
    ];
  }
  getUsers(): User[] {
    return this.users;
  }
}
