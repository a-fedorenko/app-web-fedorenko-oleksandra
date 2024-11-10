import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../../models/user-model';

export interface Response {
  successful: boolean,
  result: string,
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  configUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User): any {
    localStorage.getItem('user');
    this.router.navigate(['/courses']);
    // return this.http.post<any>(`${this.configUrl}/login`, user)
    //   .pipe(
    //     tap(() => {
    //       this.router.navigate(['/courses']);
    //     }),
    //     catchError(error => of(error))
    //   )
  }

  logout() {
    return this.http.delete(`${this.configUrl}/logout`)
      .pipe(
        tap(() => {
          this.router.navigate(['/login']);
        })
      )
  }

  register(user: User): void {
    localStorage.setItem('user', user.id);
    this.router.navigate(['/login']);
    // return this.http.post<any>(`${this.configUrl}/register`, user)
    //   .pipe(
    //     tap(() => {
    //       this.router.navigate(['/login']);
    //     }),
    //     catchError(error => of(error))
    //   )
  }

}
