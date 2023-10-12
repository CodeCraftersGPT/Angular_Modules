import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string = '';
  password:string = '';
  constructor() { }

  login(){
    if(this.userName=='admin' && this.password=='admin'){
      sessionStorage.setItem('token','admin');
      alert('Login Success');
    }
    else{
      alert('Invalid Credentials');
    }
  }

}
