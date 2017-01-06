import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'search',
  template: require('./Search.html')
})
export class SearchComponent {
  constructor( 
  private router: Router,

) {}

gotoHome() {
  this.router.navigate(['/']);
}

datafrom : number;
}
