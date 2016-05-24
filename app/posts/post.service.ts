import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private _postsurl = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private _http: Http) { }

  getPosts(filter?) {
    var filterUrl = this._postsurl;
    if (filter && filter.userId) {
      filterUrl += '?userId=' + filter.userId; 
    }
    return this._http.get(filterUrl)
                      .map(res => res.json());
  }
  
  getComments(id) {
    return this._http.get(this._postsurl + '/' + id + '/comments')
                     .map(res => res.json());
  }
}