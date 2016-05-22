import { Component } from 'angular2/core';
import { CanDeactivate } from 'angular2/router';

@Component({
  selector: 'contact',
  template: `<h3>Contact</h3>`
})
export class ContactComponent implements CanDeactivate{
  constructor() { }

   routerCanDeactivate(next, prev) {}
}