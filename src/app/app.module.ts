import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { WorkComponent } from './work/work.component';

import { TextComponent } from './text/text.component';
import { EmptyComponent } from './empty/empty.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouting} from './app-routing';
import {SidebarModule} from 'primeng/sidebar';
import { RouterHelpService } from './other/router-help.service';
import { SlickModule } from 'ngx-slick';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import {SafePipe} from './pipes/pipe';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import {UserService} from './service';
import {HttpClientModule} from '@angular/common/http';
import {Ng2OrderModule} from 'ng2-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    WorkComponent,
    TextComponent,
    EmptyComponent,
    PrivacyPolicyComponent,
    PortfolioComponent,
    HeaderComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    SidebarModule,
    SlickModule,
    JwSocialButtonsModule,
    HttpClientModule,
    Ng2OrderModule

  ],
  providers: [RouterHelpService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
