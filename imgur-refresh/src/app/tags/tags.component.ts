import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  featured_tag_topic:string ="Pokemon"
  featured_tag_posts:string ="52,028"
  tags:Array<string> = ['Brendan Fraser','Tradition','Spiderman'];

  constructor() { }

  ngOnInit(): void {
  }

}
