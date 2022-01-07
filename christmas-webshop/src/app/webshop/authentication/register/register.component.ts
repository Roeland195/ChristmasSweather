import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') registerForm!: NgForm; 
  passwordSame = false;
  formIsFilled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formIsFilled = true;
    if(form.value.password === form.value.passwordCorrect){
      this.passwordSame = true;
      
    }else{
      this.passwordSame = false;
    }
  }

  onBack(){
    this.router.navigate(['/auth']);
  }

}
