import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  registrationForm: FormGroup;
  sub: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  private initForm(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    window.localStorage.setItem('user', JSON.stringify(this.registrationForm.getRawValue()));
    this.registrationForm.disable();
    this.initForm();
  }

}
