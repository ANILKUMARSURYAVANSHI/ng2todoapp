/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './containers/App';
import {AnilComponent} from './components/anil/Anil';
import {SearchComponent} from './components/search/Search';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'welcome',
    component: AnilComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

export const routing = RouterModule.forRoot(routes);
