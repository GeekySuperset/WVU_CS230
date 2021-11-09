import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { LayoutEmeraldComponent } from './layout-emerald/layout-emerald.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { LayoutPrivacyComponent } from './layout-privacy/layout-privacy.component';
import { LayoutRegisterComponent } from './layout-register/layout-register.component';
import { LayoutRulesComponent } from './layout-rules/layout-rules.component';
import { LayoutSignInComponent } from './layout-sign-in/layout-sign-in.component';

const routes: Routes = [
  {path: 'emerald', component: LayoutEmeraldComponent},
  {path: 'signin', component: LayoutSignInComponent},
  {path: 'register', component: LayoutRegisterComponent},
  {path: 'rules', component: LayoutRulesComponent},
  {path: 'privacy', component: LayoutPrivacyComponent},
  {path: 'auth', component: AuthComponent },
  {path: '', component: LayoutMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
