import { Component, OnInit } from '@angular/core';
import { mock_posts } from './mock-posts';
import { Post } from "./post.model"

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];

  constructor() { 
    for (var post of mock_posts){
      this.posts.push(new Post(post));
    }
  }

  ngOnInit(): void {
  }

}
