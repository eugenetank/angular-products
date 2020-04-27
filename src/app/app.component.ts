import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { AuthService } from './services/auth.service';

import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated: boolean;
  userName: string;
  urlSubcription: any;
  routePath: string;

  constructor (
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  get signUpRoute() {
    return this.routePath === '/register';
  }

  get signInRoute() {
    return this.routePath === '/auth';
  }

  ngOnInit() {
    const user = this.auth.readUser();
    this.isAuthenticated = this.auth.isAuthenticated;
    this.userName = user ? user.name : '';
    this.urlSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pluck('url'),
      )
      .subscribe(event => {
        this.routePath = event;
      });
  }

  ngOnDestroyed() {
    this.urlSubscription.unsubscribe();
  }

  signOut() {
    this.auth.signOut();
  }
}

