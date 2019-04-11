import {Component}  from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector:'feature2',
  template:`
  <p>FEATURE2 DISPLAYY</p>
  <button routerLink='/landing/feature1'>NAVIGATE TO F1</button>
  
  `
})
export class Feature2Component{
  constructor(private router: Router,private route: ActivatedRoute){}

  onLogin(){
    this.router.navigate(["../../Login"], {relativeTo: this.route});
  }
}