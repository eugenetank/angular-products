import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../services/data/api.service';
import { Api, APIList } from '../services/data/api';

import { UserCredentials } from '../models/user-credentials.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  providers: [ApiService],
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  userCredentials: UserCredentials = {
    username: '',
    password: '',
  };
  loginForm: FormGroup;

  private _backend: Api;

  constructor(
    private api: ApiService,
    private injector: Injector,
  ) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this._backend.userAuthenticate(username, password).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(this.userCredentials.username, Validators.required),
      password: new FormControl(this.userCredentials.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    if (!this.api.moduleAPI) {
      this.api.setApi(APIList.Smk);
    }
    const injectable = this.api.moduleAPI;
    this._backend = this.injector.get(injectable);
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
