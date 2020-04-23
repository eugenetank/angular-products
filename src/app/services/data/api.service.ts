import { Injectable } from '@angular/core';

import { Api, APIList } from './api';
import { TestingApiService } from './testing-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  moduleAPI: any = null;
  private apiMap = new Map([ [ APIList.Smk, TestingApiService ] ]);

  setApi(value) {
    this.moduleAPI = this.apiMap.get(value);
  }
  constructor() { }
}
