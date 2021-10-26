import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './post.serivce';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  posts:Post[] = [];
  length:number = 0;
  constructor(private infoService:PostsService) { 
  }

  ngOnInit(): void {
    this.getPost();
    this.getlength();
  }

  onAddPost(data:Post){
    this.getlength();
    data.comments = '0';
    data.post_views = '0';
    data.upvotes = '0';
    this.posts[this.length] = data;
    this.infoService.pushPost(data,this.length).subscribe(data =>{
      console.log(data);
    });
  }

  getPost(){
    this.infoService.getPosts().subscribe((data: Post[]) =>{
      this.posts = data;
    })
  }

  getlength(){
    this.length = this.posts.length;
    console.log("leng"+this.posts.length);
  }
}
