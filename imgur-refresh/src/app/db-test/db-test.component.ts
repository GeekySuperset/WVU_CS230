import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { DbTest } from './db-test.model';
@Injectable()
@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html'
})
export class DbTestComponent implements OnInit {
  myInfo: DbTest|undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<DbTest>('https://imgur-refresh-default-rtdb.firebaseio.com/my-info.json');
  }
  showUserInfo(){
    this.getUserInfo().subscribe((data: DbTest) =>{
      console.log(data);
      this.myInfo = data;
    })
  }
}
