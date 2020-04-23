import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../services/data/api.service';
import { Api } from '../services/data/api';

import { UserCredentials } from '../models/user-credentials.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [ApiService],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userCredentials: UserCredentials = {
    username: '',
    password: '',
  };
  registerForm: FormGroup;

  private backend: Api;

  constructor(private api: ApiService) {}

  onSubmit() {
    const { username, password } = this.registerForm.value;
    this.backend.userRegister(username, password).subscribe(console.log);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(this.userCredentials.username, Validators.required),
      password: new FormControl(this.userCredentials.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.backend = this.api.moduleAPI;
  }

  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }

}
