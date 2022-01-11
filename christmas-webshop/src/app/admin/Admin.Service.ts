import { Injectable } from '@angular/core';
import { HttpSercive } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService{
  onAdmin = false;

  constructor(private http: HttpSercive) { 
    
  }


}
