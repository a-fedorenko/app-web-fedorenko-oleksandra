import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  arrow: unknown = faArrowRight;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  log(): void {
    this.router.navigate(['/registration']);
  }
}
