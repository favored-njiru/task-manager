import { Component , signal } from '@angular/core';
import {form ,FormField , required,email}  from '@angular/forms/signals';

interface LoginData {
  email:string,
  password:string,
  rememberMe:boolean
}


@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
loginDeets = signal <LoginData> ({
email: '',
password: '',
rememberMe: false,
});

loginForm = form(this.loginDeets , (fieldPath) =>
{ 
  required(fieldPath.email , {message: 'Email is required'});
  email(fieldPath.email , {message:'enter a valid email'});

  required(fieldPath.password,{message: 'password required'});
});
}
