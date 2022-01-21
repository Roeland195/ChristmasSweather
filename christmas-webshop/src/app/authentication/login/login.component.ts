import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { authenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm!: NgForm;
  credential = {username: '', password: ''};
  loginSucceded = false;

  constructor(private router: Router, private auth: authenticationService) { }

  ngOnInit(): void {
  }

  login(Form: NgForm){
    let email = Form.value.email;
    let password = Form.value.password;

    this.auth.authenticate(email, password, (data) => {
      if(data !== null){
        localStorage.setItem("token", data.token);
        this.router.navigate(['/products']);
        const token = localStorage.getItem('token');
          const tokenPayload: any = jwt_decode(token!);
          let role = tokenPayload.role;
          this.auth.role.next(role);
          this.auth.userEmail = data.email;
      }else{
        this.loginSucceded = true;
      }
     }, ()=>{});
  }

  onKeyUp(){
    this.loginSucceded = false;
  }

  onRegister(){
    this.router.navigate(['/auth/register']);
  }

}
