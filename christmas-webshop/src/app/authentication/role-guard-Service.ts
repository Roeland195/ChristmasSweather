import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import {AuthService} from "./auth-service";
import jwt_decode from 'jwt-decode';
import { authenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public Auth: AuthService, public router: Router, public authenticationService: authenticationService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    
    if (token) {
      const tokenPayload: any = jwt_decode(token);
      let role = tokenPayload.role;
      console.log(role);
      
      
      if (!this.Auth.isAuthenticated() || role !== expectedRole) {
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false
  }
}



