import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpSercive } from '../http.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class authenticationService{
    private endpoint = ('auth')
    authenticated = false;
    user: UserModel = new UserModel;

  constructor(private http: HttpSercive, private router : Router) { }

  register(user: UserModel) :void{
    this.http.post(this.endpoint, user, (data) =>{
        console.log("DATA: "+data);
      });
  }

  logout(){
    this.http.post('logout', this.user, (data) =>{
        this.authenticated = false;
      });
  }

  authenticate(credentials: { email: string; password: string; }){

    this.http.authenticate(credentials,() =>{
        this.router.navigate(['/']);
      });
      return false;
  }
}
