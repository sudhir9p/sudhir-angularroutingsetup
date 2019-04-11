import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {LandingComponent} from './landing.component'
import {Feature1Component} from '../Feature1/feature1.component'
import {Feature2Component} from '../Feature2/feature2.component'

export const routes: Routes = [
  {path:'',component:LandingComponent,children:[
  {path:'',redirectTo: 'feature1', pathMatch: 'full' },
  {path:'feature1',component:Feature1Component },
  {path:'feature2',component:Feature2Component }
  
  ]} 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }