import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm!: NgForm;
  credential = {email: '', password: ''};

  constructor(private router: Router, private auth: authenticationService) { }

  ngOnInit(): void {
  }

  login(Form: NgForm){
    this.credential.email = Form.value.email;
    this.credential.password = Form.value.password;

    this.auth.authenticate(this.credential);
  }

  onRegister(){
    this.router.navigate(['/auth/register']);
  }

}
