import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1><courses></courses><authors></authors>
    <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <like></like><hr />
    <voting [voteCount]="post.voteCount" [myVote]="post.myVote" 
      (vote)="onVote($event)"></voting>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent]
})
export class AppComponent {
  post = {
      title: 'Title',
      isFavorite: true,
      voteCount: 10,
      myVote: 0
  }
  onFavoriteChange($event) { console.log($event);}
  onVote($event) {console.log($event);} 
 }
