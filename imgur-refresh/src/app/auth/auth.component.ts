import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
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
    public success:string = "";
    constructor(private authService:AuthService){
        
    }
    public onSubmit(data:NgForm){
        console.log("Auth Button Clicked: "+ this.buttonClicked)
        console.log(data.value)
        
        if (this.buttonClicked == 'SignUp'){
            this.authService.signUp(data.value.email, data.value.password).subscribe(
                (data:AuthResponse) =>{
                    console.log("Congratulations on Signing UP");
                    this.success = ("Congratulations on Signing Up")
                },
                error =>{
                    console.log("Sign up failed, reason: " + error.error.error.message)
                    alert("Sign up failed, reason: " + error.error.error.message);
                }
            );
        }
        if (this.buttonClicked == 'SignIn'){
            this.authService.signIn(data.value.email, data.value.password).subscribe(
                (data:AuthResponse) =>{
                    console.log("You are now signed in");
                    this.success = ("You are now signed in")
                },
                error =>{
                    console.log("Sign in failed, reason: " + error.error.error.message)
                    alert("Sign in failed, reason: " + error.error.error.message);
                }
            );
        }
    }
}