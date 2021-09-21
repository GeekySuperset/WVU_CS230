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
    HeaderSecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
