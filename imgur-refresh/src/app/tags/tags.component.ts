import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Tag } from "./tag.model"
import { TagsService } from './tags.service';

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

  constructor(private infoService:TagsService ) { 
  }
  
  ngOnInit(): void {
    this.showTags();
  }
  
  showTags(){
    this.infoService.getTags().subscribe((data: Tag[]) =>{
      this.tags = data;
    })
  }
}
