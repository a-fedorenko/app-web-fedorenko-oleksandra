import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Course } from '../../../../models/course-model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  searchingState$: Observable<boolean>;
  iconEdit: unknown = faPen;
  iconDelete: unknown = faTrashAlt;
  showButtonText: string = 'Show course';
  search: string;

  @Input() courses: Course[] | null;
  @Input() isEdit: boolean | null;

  @Output() edit: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() delete: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() show: EventEmitter<Course> = new EventEmitter<Course>();


  constructor(
  ) { }

  ngOnInit(): void {
    //this.searchingState$ = this.coursesFacade.isSearchingState$;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  showCourse(data: Course): void {
    this.show.emit(data);
  }

  editCourse(data: Course): void {
    this.edit.emit(data);
  }

  deleteCourse(data: Course): void {
    this.delete.emit(data);
  }

  filter(data: string): void {
    //this.coursesFacade.getFilteredCourses(data);
    // this.coursesFacade.courses$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(
    //     courses => this.courses = courses ?? []
    //   );
    // this.searchingState$ = this.coursesFacade.isSearchingState$;
  }

}
