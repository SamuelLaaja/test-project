import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User, TestClass} from '../user';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title: string;
  users: User[];
  @Output() userSelected: EventEmitter<User>;
  constructor() {
    this.title = 'User List';
    this.users = [];
    this.userSelected = new EventEmitter();
  }

  ngOnInit() {
    this.users = [
      new User('Pena', 'Pontikkala'),
      new User('Jaana', 'Jännittäjä'),
      new User('Asko', 'Penttilä')
    ];
  }
  onUserSelect(user: User) {
    this.userSelected.emit(user);
  }
}
