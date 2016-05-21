import { Component } from 'angular2/core';
import { Control, ControlGroup, Validators } from 'angular2/common';
import { UsernameValidators } from './usernameValidators'

@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.component.html' 
})
export class FormComponent {
 form = new ControlGroup({
   username: new Control('', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace]), 
                                                 UsernameValidators.shouldBeUnique),
   password: new Control('', Validators.required)
 });
  signup() {
    console.log(this.form.value);
  }
}