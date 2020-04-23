import { Injectable } from '@angular/core';

const RECORD_NAME = 'session';

export interface UserToken {
  name: string;
  access: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor() {
    this.readUser();
  }

  saveUser(token: UserToken) {
    if (!token) return;
    localStorage.setItem(RECORD_NAME, JSON.stringify(token));
    this.isAuthenticated = true;
  }
  
  readUser(): UserToken | null {
    const user = localStorage.getItem(RECORD_NAME);
    this.isAuthenticated = !!user;
    return user ? JSON.parse(user) : null;
  }

}
