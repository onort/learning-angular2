import { Component, OnInit } from 'angular2/core';

import { PaginationComponent } from './pagination.component';
import { PostService } from './post.service';
import { SpinnerComponent } from './spinner.component';
import { UsersService } from './users.service';

@Component({
  selector: 'posts',
  templateUrl: 'app/posts.component.html',
  styles: [`
    .posts li { cursor: pointer; }
    .posts li:hover { background: #ecf0f1; } 
    .list-group-item.active, 
    .list-group-item.active:hover, 
    .list-group-item.active:focus { 
        background-color: #ecf0f1;
        border-color: #ecf0f1; 
        color: #2c3e50;
    }
  `],
  providers: [PostService, UsersService],
  directives: [SpinnerComponent, PaginationComponent]
})
export class PostsComponent implements OnInit {
  posts = [];
  pagedPosts = [];
  pageSize = 10;
  users: any[];
  postsLoading;
  currentPost;
  commentsLoading;
  
  constructor(private _postService: PostService,
              private _usersService: UsersService) { }
  
  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }
  
  select(post) {
    this.commentsLoading = true;
    this.currentPost = post;
    this._postService.getComments(this.currentPost.id)
                      .subscribe(comments => {
                        this.commentsLoading = false;
                        this.currentPost.comments = comments;
                      });
  }
  
  reloadPosts(filter) {
    this.currentPost = null;
    this.loadPosts(filter);
  }
  
  onPageChanged(page) {
    this.pagedPosts = this.getPostsInPage(page);
  }
  
  private loadUsers() {
    this._usersService.getUsers()
                      .subscribe(users => this.users = users)
  }
  
  private loadPosts(filter?) {
    this.postsLoading = true;
    this._postService.getPosts(filter)
                     .subscribe(posts => {
                       this.postsLoading = false;
                       this.posts = posts;
                       this.pagedPosts = this.getPostsInPage(1);
                     })
  }
  
  private getPostsInPage(page){
        var result = [];
		var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

        for (var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i]);
            
        return result;
  }
  
}