import { Injectable } from '@angular/core';
import { HttpResponse } from './HttpResponse';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpSercive{
    public static readonly RESPONSE_SUCCESS_CODE ="SUCCES";

    private url: string = "http://localhost:8080";
    private http : HttpClient;

    constructor(private h: HttpClient) {
        this.http = h;
    }

    public get<T>(endpoint : string, args : Map<string, string>, implementation : (data : T) => void){
        endpoint = this.getEndpointWithArguments(endpoint, args);

        this.http.get<HttpResponse<T>>(this.url + endpoint).subscribe((response) =>{
            HttpSercive.callImplementation<T>(response, implementation);
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
      console.log(response)
        if (response.response !== HttpSercive.RESPONSE_SUCCESS_CODE) {
          HttpSercive.onError(response.error);
        }
        // @ts-ignore
      implementation(response);
      }

      private static onError(message : string) {
        console.log("THERE WENT SOMETHING WRONG: "+ message);
      }


}
