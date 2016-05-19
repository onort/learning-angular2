import { Component } from 'angular2/core'
import { CourseService } from './course.service';
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
  <h2>Courses</h2>
  {{title}}
  <input type="text" autoGrow />
  <ul>
    <li *ngFor="#course of courses, #i = index">{{i + 1}} - {{course}}</li>
  </ul>
  `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent {
  title: string = 'Title for the courses page';
  courses;

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
