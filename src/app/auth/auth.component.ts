import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../services/data/api.service';
import { Api } from '../services/data/api';

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

  private backend: Api;

  constructor(private api: ApiService) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.backend.userAuthenticate(username, password).subscribe(console.log);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(this.userCredentials.username, Validators.required),
      password: new FormControl(this.userCredentials.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.backend = this.api.moduleAPI;
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
