import { Component, Input } from 'angular2/core';

@Component({
  selector: 'like',
  template: `
  <i class="glyphicon glyphicon-heart"
    [class.liked]="isLiked"
    (click)="like()">
  </i> {{ likes }}
  `,
  styles: [`
  .glyphicon { color: #CCC; cursor: pointer;}
  .liked { color: deeppink; }
  `]
})
export class LikeComponent {
  @Input() isLiked: boolean = false;
  @Input() likes: number = 10;
  
  like() {
    if (!this.isLiked) {
      this.likes++;
      this.isLiked = true;
    }
    else {
      this.likes--;
      this.isLiked =  false;
    }
  }
   
}