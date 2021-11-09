import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
import { ContentBarComponent } from './content-bar/content-bar.component';
import { SiteMessageComponent } from './site-message/site-message.component';
import { LayoutEmeraldComponent } from './layout-emerald/layout-emerald.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { LayoutSignInComponent } from './layout-sign-in/layout-sign-in.component';
import { LayoutRegisterComponent } from './layout-register/layout-register.component';
import { LayoutPrivacyComponent } from './layout-privacy/layout-privacy.component';
import { LayoutRulesComponent } from './layout-rules/layout-rules.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { TagCardComponent } from './tags/tag-card.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './posts/post-card.component';
import {HttpClientModule} from '@angular/common/http';
import { DbTestComponent } from './db-test/db-test.component';
import { AddPostComponent } from './posts/add-post.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TagsComponent,
    ContentBarComponent,
    SiteMessageComponent,
    LayoutEmeraldComponent,
    LayoutMainComponent,
    LayoutSignInComponent,
    LayoutRegisterComponent,
    LayoutPrivacyComponent,
    LayoutRulesComponent,
    HeaderSecondaryComponent,
    TagCardComponent,
    PostsComponent,
    PostCardComponent,
    DbTestComponent,
    AddPostComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
