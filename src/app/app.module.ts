import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AppRoutingModule} from './app.routing.module';
import {LoginComponent} from './Login/login.component'
import {LandingComponent} from './Landing/landing.component'
import {LandingModule} from './Landing/landing.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,LandingModule],
  declarations: [ AppComponent,LoginComponent,HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
