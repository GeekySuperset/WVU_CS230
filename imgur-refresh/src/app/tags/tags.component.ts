import { Component, OnInit } from '@angular/core';
import { mock_tags } from './mock-tags';
import { Tag } from "./tag.model"
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  featured_tag_topic:string ="Pokemon"
  featured_tag_posts:string ="52,028"
  //tags:Array<string> = ['Brendan Fraser','Tradition','Spiderman'];
  tags:Tag[] = [];

  constructor() { 
    for (var tag of mock_tags){
      this.tags.push(new Tag(tag));
    }
  }

  ngOnInit(): void {
  }

}
