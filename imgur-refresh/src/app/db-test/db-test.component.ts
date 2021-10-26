import { Component, Injectable, OnInit } from '@angular/core';
import { DbTest } from './db-test.model';
import { UserInfoService } from './db-test.service';
@Injectable()
@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html'
})
export class DbTestComponent implements OnInit {
  myInfo: DbTest|undefined;

  constructor(private infoService:UserInfoService ){ }

  ngOnInit(): void {
    this.showUserInfo();
  }

  showUserInfo(){
    this.infoService.getUserInfo().subscribe((data: DbTest) =>{
      console.log(data);
      this.myInfo = data;
    })
  }
}
