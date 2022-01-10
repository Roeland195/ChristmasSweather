import { Injectable } from '@angular/core';
import { HttpResponse } from './HttpResponse';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ProductModel } from './webshop/products/product.model';

@Injectable({
    providedIn: 'root'
})
export class HttpSercive{
    public static readonly RESPONSE_SUCCESS_CODE ="SUCCES";
    private authenticated = false;

    private url: string = "http://localhost:8080";
    private http : HttpClient;

    constructor(private h: HttpClient) {
        this.http = h;
    }

    public get<T>(endpoint : string, implementation : (data : T) => void){
        this.http.get<HttpResponse<T>>(this.url + endpoint).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation);
        });
    }

    public post<T>(endpoint: string, body: T, implementation : (data: T) => void){
        this.http.post<HttpResponse<T>>(this.url + endpoint, body).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation);
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

    private static callImplementation<T>(response : HttpResponse<T>, implementation : (data : T) => void | null) : void {
        if (response.response !== HttpSercive.RESPONSE_SUCCESS_CODE) {
          HttpSercive.onError(response.error);
        }else{
            console.log("IT HAS BEEN A SUCCES");
        }
        // @ts-ignore
      implementation(response);
      }

      private static onError(message : string) {
          console.log("SENDING HAS BEEN A FAILLUAR");
          
      }


}
