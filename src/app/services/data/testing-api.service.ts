import { Injectable } from '@angular/core';

import Api from './api';
import { AuthData } from '../../auth/auth-data.model.ts';

@Injectable({
  providedIn: 'root'
})
export class TestingApiService implements Api {
  userRegister(username: string, password: string): AuthData {
    // do something
  }
  userAuthenticate(username: string, password: string): AuthData {

  }
}

