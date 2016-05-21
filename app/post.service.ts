import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from 'angular2/core';
import { Post } from './post';

@Injectable()
export class PostService {
  constructor(private _http: Http) {}
  private _url = 'http://jsonplaceholder.typicode.com/posts';
  
  getPosts(): Promise<Post[]> { // Observable<Post[]> eğer observable istersen
    return this._http.get(this._url)
        .map(res => res.json())
        .toPromise(); // converting observable to a promise (if you need one)
  }
  createPost(post: Post) {
    return this._http.post(this._url, JSON.stringify(post))
        .map(res => res.json());
  }
}