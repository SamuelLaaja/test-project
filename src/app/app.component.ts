import { Component } from '@angular/core';
import {User} from './user/user';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  selectedUserName: string;
  state: boolean;

  constructor() {
    this.selectedUserName = 'ekoodi';
    this.state = false;
  }

  changeName(): void {
    if (this.state) {
      this.selectedUserName = 'ekoodi';
    } else {
      this.selectedUserName = '3k00d1';
    }
    this.state = !this.state;
  }

  onUserSelected(user: User) {
    this.selectedUserName = user.firstName + ' ' + user.lastName;
  }
}
