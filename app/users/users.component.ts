import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';

import { UsersService } from './users.service';


@Component({
  selector: 'users',
  templateUrl: 'app/users.component.html',
  directives: [RouterLink],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  users: any[];
  isLoading = true;
  
  constructor(private _usersService: UsersService) { }
  
  ngOnInit() {
    this._usersService.getUsers()
                      .subscribe(users => {
                        this.isLoading = false;
                        this.users = users;
                      }
  }
  
  deleteUser(user) {
    if (confirm('Are you sure you want to delete ' + user.name + '?')) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      this._usersService.deleteUser(user.id)
                        .subscribe(null, 
                                   err => {
                                     alert('Could not delete this user.');
                                     this.users.splice(index, 0, user);
                                   });
    }
  }
}