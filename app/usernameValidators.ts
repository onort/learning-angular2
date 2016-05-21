import { Control } from 'angular2/common';

export class UsernameValidators {
  static cannotContainSpace(control: Control) {
    if (control.value.indexOf(' ') > 0)
      return {cannotContainSpace: true};
    return null;
  }
  static shouldBeUnique(control: Control) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        if (control.value == 'onur')
          resolve({ shouldBeUnique: true });
        else
          resolve(null);
      }, 1000)
    });
  }
}