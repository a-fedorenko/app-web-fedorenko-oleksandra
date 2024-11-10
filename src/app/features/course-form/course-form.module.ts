import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    CourseFormComponent
  ],
})
export class CourseFormModule { }
