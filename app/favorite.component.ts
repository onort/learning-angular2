import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'favorite',
  templateUrl: 'app/favorite.template.html',
  inputs: ['isFavorite:is-favorite'], // adding alias (@Input() is recommended)
  // alternate method for output 
  // outputs: ['change:favoriteChange']
  styles: [`
    .glyphicon { margin-left: 30px; }
    .glyphicon-star { color: orange; }
  `] // or styleUrl  (only valid for this template)
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite = false; // becomes part of the public api of the component (added alias)
  
  @Output() change = new EventEmitter();
  
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
} 