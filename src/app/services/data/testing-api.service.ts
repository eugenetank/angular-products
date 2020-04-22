import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Api } from './api';
import { AuthData } from '../../models/auth-data.model';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestingApiService implements Api {
  apiUrl: string = 'http://smktesting.herokuapp.com/api/';

  constructor(private http: HttpClient) {}
  
  userRegister(username: string, password: string): Observable<AuthData> {
    return this.http.post<AuthData>(`${this.apiUrl}register/`, { username, password });
  }

  userAuthenticate(username: string, password: string): Observable<AuthData> {
    return this.http.post<AuthData>(`${this.apiUrl}login/`, { username, password });
  }
}

