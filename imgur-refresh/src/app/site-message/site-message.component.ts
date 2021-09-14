import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-message',
  templateUrl: './site-message.component.html',
  styleUrls: ['./site-message.component.css']
})
export class SiteMessageComponent implements OnInit {
  site_message:string="On the internet, nobody knows you're a dog"
  constructor() { }

  ngOnInit(): void {
  }

}
