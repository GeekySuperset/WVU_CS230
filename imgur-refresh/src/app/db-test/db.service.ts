import { Injectable } from "@angular/core"
import { AngularFireDatabase} from "@angular/fire/compat/database"
import { Observable } from "rxjs"
import { DbTest } from "./db-test.model";
@Injectable({
    providedIn:"root"
})
export class DatabaseService{
    item:Observable<DbTest | null>;
    constructor(private db:AngularFireDatabase){
        this.item = this.db.object<DbTest>('posts').valueChanges();
    }
    getUserInfo(){
        this.item.subscribe((data) =>{
           console.log(data); 
        })
    }
    giveUserInfo(){
        return this.item;
    }
}