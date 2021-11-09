import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: "refresh-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent{
    public buttonClicked!:string;
    private authObservable!:Observable<AuthResponse>;
    constructor(private authService:AuthService){

    }
    public onSubmit(data:NgForm){
        console.log("Auth Button Clicked: "+ this.buttonClicked)
        console.log(data.value)
        
        if (this.buttonClicked == 'SignUp'){
            this.authService.signUp(data.value.email, data.value.password).subscribe(
                (data:AuthResponse) =>{
                    console.log(data);
                    alert("Signed Up")
                },
                error =>{
                    alert("Sign up failed, reason: " + error.error.error.message);
                }
            );
        }
        if (this.buttonClicked == 'SignIn'){
            this.authService.signIn(data.value.email, data.value.password).subscribe(
                (data:AuthResponse) =>{
                    console.log(data);
                    alert("Logged In")
                },
                error =>{
                    alert("Sign in failed, reason: " + error.error.error.message);
                }
            );
        }
    }
}