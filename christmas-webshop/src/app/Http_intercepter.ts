import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authenticationService } from "./authentication/authentication.service";

@Injectable()
export class Http_Intercepter implements HttpInterceptor {

    constructor(public auth: authenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization:"Bearer " + localStorage.getItem('token')
            }
        });

        return next.handle(request);
    }
}