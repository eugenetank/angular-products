import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  userCredentials = {
    username: '',
    password: '',
  };
  loginForm: FormGroup;

  onSubmit() {
    console.warn(this.loginForm.value);
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
