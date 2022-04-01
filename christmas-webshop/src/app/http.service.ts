import { Injectable } from '@angular/core';
import { HttpResponse } from './HttpResponse';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpSercive{
    public static readonly RESPONSE_SUCCESS_CODE ="SUCCESS";
    public static readonly RESPONSE_FAILURE_CODE = "FAILURE";
    private authenticated = false;

    private url: string = "https://still-forest-71875.herokuapp.com";
    // private url: string = "http://localhost:8080";

    private http : HttpClient;

    constructor(private h: HttpClient) {
        this.http = h;
    }
    public get<T>(endpoint : string, args : Map<string,string>, implementation : (data : T) => void, onFailure: () => void = () =>{}){
        endpoint = this.getEndpointWithArguments(endpoint, args);
        this.http.get<HttpResponse<T>>(this.url + endpoint, {headers:{Authorization:"Bearer " + localStorage.getItem('token')}}).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation, onFailure);
        });
    }

    public getProductsWithOrder<T>(endpoint : string, args : string, implementation : (data : T) => void, onFailure: () => void = () =>{}){
        this.http.get<HttpResponse<T>>(this.url + endpoint).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation, onFailure);
        });
    }

    public getall<T>(endpoint : string){
        return this.http.get<HttpResponse<T>>(this.url+endpoint);
    }

    public post<T>(endpoint: string, body: T, implementation : (data: T) => void, onFailure: () => void = () =>{}){
        this.http.post<HttpResponse<T>>(this.url + endpoint, body, {headers:{Authorization:"Bearer " + localStorage.getItem('token')}}).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation, onFailure);
        });
    }

    public postWithReturnType<T, R>(endpoint : string, body : T, implementation : (data : R) => void, onFailure : () => void = () => {}) {
        this.http.post<HttpResponse<R>>(this.url + endpoint, body,{headers:{Authorization:"Bearer " + localStorage.getItem('token')}} ).subscribe((response) => {
          HttpSercive.callImplementation<R>(response, implementation, onFailure);
        });
      }

    public put<T>(endpoint : string, body : T, implementation : (data : T) => void, onFailure: () => void) {
        this.http.put<HttpResponse<T>>(this.url + endpoint, body, {headers:{Authorization:"Bearer " + localStorage.getItem('token')}}).subscribe((response) => {
          HttpSercive.callImplementation<T>(response, implementation, onFailure);
        });
      }

    public delete<T>(endpoint : string, body : T, implementation : (data : T) => void, onFailure: () => void) {
        this.http.delete<HttpResponse<T>>(this.url + endpoint, {body: body}).subscribe((response) => {
            HttpSercive.callImplementation<T>(response, implementation, onFailure);
        });
      }

    authenticate(credentials: { email: string; password: string; }, callback: () => any) {
        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});

        this.http.get('user', {headers: headers}).subscribe(response => {
            if (response.valueOf.name) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }


    public getEndpointWithArguments(endpoint :string, args : Map<string, string>) : string{
        if(args.size !== 0){
            endpoint += "?";
            args.forEach((value: string, key: string) =>{
                endpoint += key + "=" + value + "&";
            });
            endpoint = endpoint.substr(0, endpoint.length -1);
        }
        return endpoint;
    }

    private static callImplementation<T>(response : HttpResponse<T>, implementation : (data : T) => void | null, onFailure : () => void) : void {
        // if error
        if (response.response === HttpSercive.RESPONSE_FAILURE_CODE) {
          HttpSercive.onError(response.error);
          onFailure();
        }
        else {
          if (implementation !== null)
            implementation(response.data);
        }
      }
      private static onError(message : string) {
        console.log(message);
      }
    }
