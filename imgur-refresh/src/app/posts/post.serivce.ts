import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService{
    constructor(private http:HttpClient){
    }
    getPosts(){
        return this.http.get<Post[]>('https://imgur-refresh-default-rtdb.firebaseio.com/posts.json');
    }
    pushPost(myPost:Post,length:number){
        var slength = length.toString();
        return this.http.put('https://imgur-refresh-default-rtdb.firebaseio.com/posts/'+slength+'.json', myPost);
    }
}