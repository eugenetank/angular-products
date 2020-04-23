import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated: boolean;
  userName: string;

  constructor (
    private api: ApiService,
    private auth: AuthService) {}

  ngOnInit() {
    const user = this.auth.readUser();
    this.isAuthenticated = this.auth.isAuthenticated;
    this.userName = user ? user.name : '';
  }
}
