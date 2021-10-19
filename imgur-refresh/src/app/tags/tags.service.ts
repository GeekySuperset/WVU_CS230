import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tag } from "./tag.model";

@Injectable({providedIn: 'root'})
export class TagsService{
    constructor(private http:HttpClient){
    }
    getTags(){
        return this.http.get<Tag[]>('https://imgur-refresh-default-rtdb.firebaseio.com/tags.json');
    }
}