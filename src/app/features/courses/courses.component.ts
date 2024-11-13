import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../models/course-model';
import { Author } from '../../services/authors.service';
import { courses } from '../../../../courses';
import { categories } from '../../../../categories';
import { comments, posts } from '../../../../comments';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  username$: Observable<string | null>;
  isAdmin$: Observable<boolean | null>;
  allCourses: Course[];
  categories: any[];
  comments: any[];
  posts: any[];
  allAuthors: Author[] = [];
  isConfirmModalOpen: boolean = false;
  isInfo: boolean;
  selectedСourse: Course;
  modalMessage: string;
  arrowIcon = faArrowRight;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.getCourses();
    this.categories = categories;
    this.comments = comments;
    this.posts = posts;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private removeCourse(): void {
    //this.coursesFacade.deleteCourse(this.selectedСourse.id);
    this.getCourses();
  }

  openRemoveModal(course: Course): void {
    this.isConfirmModalOpen = true;
    this.selectedСourse = course;
    this.modalMessage = `Do you want to remove ${this.selectedСourse.title} course?`;
  }

  confirmRemoveCourse(data: boolean): void {
    if (data) {
      this.removeCourse();
    }
    this.isConfirmModalOpen = false;
  }

  openEditForm(course: Course): void {
    //this.coursesFacade.getSingleCourse(course.id);
    this.router.navigate(['/courses/edit/:id']);
  }

  showCourse(course: Course): void {
    //this.coursesFacade.getSingleCourse(course.id);
    this.router.navigate(['/courses/:id']);
  }

  addCourse(): void {
    this.isInfo = false;
  }

  private getUser(): void {
    //this.username$ = this.userFacade.name$;
    //this.isAdmin$ = this.userFacade.isAdmin$;
  }

  private getCourses(): void {
    this.allCourses = [...courses].map((course) => ({
      ...course,
      creationDate: new Date(course.creationDate),
      duration: Number(course.duration),
      price: Number(course.price),
      lessons:  Number(course.lessons),
      students: Number(course.students),
      url: `assets/images/courses/${course.id}.png`
    }));
  }

  logout(): void {
    //this.authFacade.logout();
  }

}
