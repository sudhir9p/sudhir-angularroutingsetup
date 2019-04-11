import { NgModule } from '@angular/core';

import {Feature1Component} from '../Feature1/feature1.component'
import {Feature2Component} from '../Feature2/feature2.component'
import {LandingRoutingModule} from './landing.routing.module';
import {LandingComponent} from './landing.component';

@NgModule({
  imports: [LandingRoutingModule],
  declarations: [LandingComponent,Feature1Component, Feature2Component ]
})
export class LandingModule { }
