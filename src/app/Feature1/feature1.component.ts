import {Component}  from '@angular/core'


@Component({
  selector:'feature1',
  template:`
  <p>FEATURE1 DISPLAYY</p>

  <button routerLink='/landing/feature2'>NAVIGATE TO F2</button>
  `
})
export class Feature1Component{
  
}