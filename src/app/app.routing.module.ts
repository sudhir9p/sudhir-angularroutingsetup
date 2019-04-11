import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './Login/login.component'

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'landing', redirectTo: 'landing', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }