import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {Md5} from "ts-md5";
import { HttpSercive } from '../http.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class authenticationService{
    private endpoint = ('auth')
    authenticated = false;
    user: UserModel = new UserModel;
    loginSucceded = false;
    userEmail = "";
    role: Subject<string> = new Subject<string>();

  constructor(private http: HttpSercive, private router : Router) { }

  register(user: UserModel) :void{
    this.http.post("/register", user, (data) =>{
        this.router.navigate(['/auth/login']);
      },() => {});
  }

  logout(){
    localStorage.setItem('token', "");
    this.role.next("");
  }

  authenticate(email: string, password: string, onSucces: (data: {email: string, firstname: string, lastname: string, token: string}) => void, onFailure: () => void){
    let hash = this.hashPassword(password);
    this.http.postWithReturnType<{username: string, password: string}, {email: string, firstname: string, lastname: string, token: string}>(
      "/authenticate",{username: email, password: hash}, onSucces, onFailure);
  }

  controlToken( onFailure: () => void){
    this.http.post("/controltoken", "sdf", (data) =>{
      console.log("DATA: "+data);
    }, onFailure);
  }
   
  

  hashPassword(password: string): string{
    return Md5.hashStr(password);
  }
}
