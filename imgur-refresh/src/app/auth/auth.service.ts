import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    endpointSignUp:string = "signUp"
    endpointSignIn:string = "signInWithPassword"
    public constructor(private http:HttpClient){

    }
    
    public signUp(email:string, password:string){
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.endpointSignUp + '?' + 'key=' + environment.firebase.apiKey , {"email":email, "password":password, returnSecureToken:true})
    }

    public signIn(email:string, password:string){
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.endpointSignIn + '?' + 'key=' + environment.firebase.apiKey , {"email":email, "password":password, returnSecureToken:true})
    }
}