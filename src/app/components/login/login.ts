import { Component , signal } from '@angular/core';
import {form ,FormField ,Validator, required,email, submit}  from '@angular/forms/signals';

interface LoginData {
  email:string,
  password:any,
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
//property
loginForm = form(this.loginDeets , (fieldPath) =>
{ 
  required(fieldPath.email , {message: 'Email is required'});
  email(fieldPath.email , {message:'enter a valid email'});
  required(fieldPath.email, {message:'password required'});
});

onSubmit(event:Event){
event.preventDefault();
submit(this.loginForm , async() => {
  const credentials=this.loginDeets();

  const email='kelly@gmail.com'
  const password= 1234

  if (credentials.email === email && credentials.password === password) {
    this.onSubmit
  };
});


}
}
