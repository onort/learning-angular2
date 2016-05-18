import { Component } from 'angular2/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'authors',
  template: `
  <h2>Authors</h2>
  {{ title }}
  <ul>
    <li *ngFor="#author of authors">{{ author }}</li>
  </ul>
  `,
  providers: [AuthorService]
})
export class AuthorsComponent {
  title: string = 'This is the title for authros page';
  authors: string[];

  constructor(private authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
