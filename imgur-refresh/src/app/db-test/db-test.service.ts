import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DbTest } from "./db-test.model";

@Injectable({providedIn: 'root'})
export class UserInfoService{
    constructor(private http:HttpClient){
    }
    getUserInfo(){
        return this.http.get<DbTest>('https://imgur-refresh-default-rtdb.firebaseio.com/my-info.json');
      }
    /*editUserInfo(){
        return this.http.post(url, body)
        use .put to replace data
    }*/
}