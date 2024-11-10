import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: "windowObject", useValue: window}
  ]
})
export class AuthModule { }
