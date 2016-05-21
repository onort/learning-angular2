import { Component, OnInit } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { SummaryPipe } from './summary.pipe';
import { FormComponent } from './contact-form.component';
import { PostService } from './post.service';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'my-app',
    template: `<div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div><hr />
    <h1>Hello Angular</h1><courses></courses><authors></authors>
    <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <like></like><hr />
    <p>{{post.longText | summary:10 }}</p>
    <voting [voteCount]="post.voteCount" [myVote]="post.myVote" 
      (vote)="onVote($event)"></voting>
      <hr />
      <contact-form></contact-form>
      <hr />
      `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent, FormComponent],
    providers: [PostService, HTTP_PROVIDERS],
    pipes: [SummaryPipe]
})
export class AppComponent implements OnInit {
  isLoading = true;
  constructor(private _postService: PostService) {}
  post = {
      title: 'Title',
      isFavorite: true,
      voteCount: 10,
      myVote: 0,
      longText: 'WINDOWS: If you\'re using it in windows, are you saving it with windows line endings? Not all programs will do this by default, notepad++ and many php editors default to linux line endings so the files will be server compatible. One easy way to check this, is open the file in windows notepad. If everything appears on one line, then the file was saved with linux line endings.'
  }
  ngOnInit() {
    this._postService.getPosts()
        .then(posts => { // .subscribe for observable
            this.isLoading = false;
            console.log(posts);
        });
  }
  onFavoriteChange($event) { console.log($event);}
  onVote($event) {console.log($event);} 
 }
