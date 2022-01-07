import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm!: NgForm;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(Form: NgForm){
    
  }

  onRegister(){
    this.router.navigate(['/auth/register']);
  }

}
