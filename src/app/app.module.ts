import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AppRoutingModule} from './app.routing.module';
import {LoginComponent} from './Login/login.component'
import {LandingComponent} from './Landing/landing.component'
import {LandingRoutingModule} from './Landing/landing.routing.module'
import {Feature1Component} from './Feature1/feature1.component'
import {Feature2Component} from './Feature2/feature2.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,LandingRoutingModule],
  declarations: [ AppComponent,LoginComponent,LandingComponent,Feature1Component, Feature2Component,HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
