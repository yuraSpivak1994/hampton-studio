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



@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    WorkComponent,
    TextComponent,
    EmptyComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    SidebarModule
  ],
  providers: [RouterHelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
