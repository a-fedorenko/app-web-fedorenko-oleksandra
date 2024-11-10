import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course-model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  selectedCourse$: Observable<Course | null>;

  constructor(

  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  private getCourse (): void {
  }

}
