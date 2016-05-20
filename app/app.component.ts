import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { SummaryPipe } from './summary.pipe';
import { FormComponent } from './contact-form.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1><courses></courses><authors></authors>
    <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <like></like><hr />
    <p>{{post.longText | summary:10 }}</p>
    <voting [voteCount]="post.voteCount" [myVote]="post.myVote" 
      (vote)="onVote($event)"></voting>
      <hr />
      <contact-form></contact-form>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent, FormComponent],
    pipes: [SummaryPipe]
})
export class AppComponent {
  post = {
      title: 'Title',
      isFavorite: true,
      voteCount: 10,
      myVote: 0,
      longText: 'WINDOWS: If you\'re using it in windows, are you saving it with windows line endings? Not all programs will do this by default, notepad++ and many php editors default to linux line endings so the files will be server compatible. One easy way to check this, is open the file in windows notepad. If everything appears on one line, then the file was saved with linux line endings.'
  }
  onFavoriteChange($event) { console.log($event);}
  onVote($event) {console.log($event);} 
 }
