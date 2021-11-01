import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './db.service';
import { Post } from "./post.model"
import { PostsService } from './post.serivce';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];

  constructor(private infoService:PostsService, private dbService:DatabaseService) { 
    this.dbService.getPosts();
  }

  ngOnInit(): void {
    this.showPosts();
  }

  showPosts(){
    this.infoService.getPosts().subscribe((data: Post[]) =>{
      this.posts = data;
    })
  }
}
