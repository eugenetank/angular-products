import { Component } from '@angular/core';

import { APIList } from './services/data/api';
import { ApiService } from './services/data/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApiService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private api: ApiService) {}

  ngOnInit() {
    this.api.setApi(APIList.Smk);
  }
}
