import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth-service';
import { HttpResponse } from './HttpResponse';
import { tap } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { authenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
      public auth: AuthService,
      public authenticate: authenticationService,
      private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        console.log("RESPONSE");
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
            console.log("UNAUTHORIZED");
            this.authenticate.logout();
            this.router.navigate(["/"]);
        }
      }
    }));
  }
}