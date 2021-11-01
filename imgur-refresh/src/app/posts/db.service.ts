import { Injectable } from "@angular/core"
import { AngularFireDatabase} from "@angular/fire/compat/database"
import { Observable } from "rxjs"
import { Post } from "./post.model";
@Injectable({
    providedIn:"root"
})
export class DatabaseService{
    items:Observable<Post[]>;
    constructor(private db:AngularFireDatabase){
        this.items = this.db.list<Post>('posts').valueChanges();
    }
    getPosts(){
        this.items.subscribe((data:Post[]) =>{
           console.log(data); 
        })
    }
}