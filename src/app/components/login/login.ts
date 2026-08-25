import { Component , inject, signal } from '@angular/core';
import {form ,FormField ,Validator, FormRoot,required,email, submit}  from '@angular/forms/signals';
import { Router } from '@angular/router';

interface LoginData {
  email:string,

  
  password:any,
  rememberMe:boolean
}


@Component({
  selector: 'app-login',
  imports: [FormField , FormRoot],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
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
  required(fieldPath.password, {message:'password required'});
},

{
  submission: {
    action: async (field) => {
const credentials = field().value();
if (credentials.email === 'kelly@gmail.com' && credentials.password === '1234') {
  await this.router.navigate(['/task-list']);
  return;
}
return {kind: 'serverError' , message :'failed to submit'};
 }
  }
}


);






}
