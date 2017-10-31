import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Ykä', 'Ykkönen'),
      new User('Kaaleppi', 'Kakkonen'),
      new User('Kikka', 'Kolmonen'),
      new User('Neppu', 'Nelonen')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addNewUser(newUser: User) {
    this.users.push(Object.assign({} , newUser));
  }

  deleteUser(user: User) {
    for (let i = 0, len = this.users.length; i < len; i++){
      if (this.users[i] === user) {
        this.users.splice(i, 1);
      }
    }
  }
}
