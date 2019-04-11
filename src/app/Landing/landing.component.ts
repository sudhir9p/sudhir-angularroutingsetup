import { Component } from '@angular/core';

@Component({
  selector: 'landing',
    template: `
    <p>App HEADRE</p>
    <button routerLink='../Login' >LogOut</button>
    <router-outlet></router-outlet>
    <p>APP FOOTER</p>
    `
})
export class LandingComponent{
  
}