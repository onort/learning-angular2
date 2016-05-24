import { Component, OnInit } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators} from 'angular2/common';
import { CanDeactivate, Router, RouteParams } from 'angular2/router';

import { User } from './user';
import { UsersService } from './users.service'
import { UserValidators } from '../shared/user.validators';

@Component({
  selector: 'add-user',
  templateUrl: 'app/users/adduser.component.html',
  providers: [UsersService]
})
export class AddUserComponent implements CanDeactivate, OnInit {
  form: ControlGroup;
  title: string;
  user = new User();
  
  constructor(private _fb: FormBuilder, 
              private _userService: UsersService,
              private _router: Router,
              private _routeParams: RouteParams) {
                
    this.form = _fb.group({
      name: ['', Validators.required],
      email: ['', UserValidators.email],
      phone: [],
      address: _fb.group({
                    street: [],
                    suite: [],
                    city: [],
                    zipcode: []
               })
      
    });
   }
   
   ngOnInit() {
     var id = this._routeParams.get('id');
     this.title = id ? 'Edit User' : 'New User';
     
     if (!id) {
       return;
     }
     this._userService.getUser(id)
                        .subscribe(
                          user => this.user = user,
                          res => {
                            if (res.status == 404) {
                              this._router.navigate(['NotFound']);
                            }
                          }
                        )
   }
   
   routerCanDeactivate() {
     if (this.form.dirty) {
       return confirm('You have unsaved changes. Are you sure you want to navigate away?');
     }
     return true;
   }
   
   saveUser(){
        var result;
        
        if (this.user.id) 
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user)
            
		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['Users']);
        });
	}

}