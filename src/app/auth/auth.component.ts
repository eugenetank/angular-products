import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TestingApiService } from '../services/data/testing-api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  providers: [TestingApiService],
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  userCredentials = {
    username: '',
    password: '',
  };
  loginForm: FormGroup;

  constructor(private api: TestingApiService) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.api.userAuthenticate(username, password).subscribe(console.log);
  }

  ngOnInit(): void {
   this.loginForm = new FormGroup({
     username: new FormControl(this.userCredentials.username, Validators.required),
     password: new FormControl(this.userCredentials.password, [
       Validators.required,
       Validators.minLength(8),
     ]),
   });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
