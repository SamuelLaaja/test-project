import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User, TestClass} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title: string;
  user: User;
  users: User[];
  @Output() userSelected: EventEmitter<User>;

  constructor(private userService: UserService) {
    this.title = 'User list';
    this.user = new User();
    this.users = [];
    this.userSelected = new EventEmitter();
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  onUserSelect(user: User) {
    this.userSelected.emit(user);
  }

  addUser() {
     if (this.user.firstName && this.user.lastName) {
      console.log(this.user);
      this.userService.addNewUser(this.user);
    }
  }

}
