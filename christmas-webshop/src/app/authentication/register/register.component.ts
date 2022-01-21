import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from '../authentication.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') registerForm!: NgForm; 
  user: UserModel = new UserModel;
  passwordSame = false;
  formIsFilled = false;

  constructor(private router: Router, private auth: authenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formIsFilled = true;
    if(form.value.password === form.value.passwordCorrect){
      this.passwordSame = true; 
      this.user.firstName = form.value.firstname;
      this.user.lastName = form.value.lastname;
      this.user.password = this.auth.hashPassword(form.value.password);;
      this.user.email = form.value.email;
      this.user.city = form.value.city;
      this.user.country = form.value.country;
      this.user.street = form.value.street;
      this.user.number = form.value.number;
      this.user.extra = form.value.addons;

      this.auth.register(this.user);
    }else{
      this.passwordSame = false;
    }
  }

  onBack(){
    this.router.navigate(['/auth']);
  }

}
