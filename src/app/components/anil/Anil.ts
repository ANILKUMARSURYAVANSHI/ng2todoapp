import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'anil',
  template: require('./Anil.html')
})
export class AnilComponent {
  name: string = "anil kuma"
  constructor( 
  private router: Router,


) {}

gotoHome() {
  this.router.navigate(['/search']);
}
}
