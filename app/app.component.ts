import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { AddUserComponent } from './users/adduser.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

@RouteConfig([
    { path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
    { path: '/posts', component: PostsComponent, name: 'Posts' },
    { path: '/users', component: UsersComponent, name: 'Users' },
    { path: '/users/add', component: AddUserComponent, name: 'AddUser' },
    { path: '/users/:id', component: AddUserComponent, name: 'EditUser' },
    { path: '/not-found', component: NotFoundComponent, name: 'NotFound' },
    { path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>`,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    
})
export class AppComponent { }