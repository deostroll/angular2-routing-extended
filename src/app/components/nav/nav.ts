import {Component} from 'angular2/core';
import {NavSense} from './../../services/navigation';

@Component({
  selector: 'navs',
  template: `
    <small>{{evt}}</small>
  `
})
export class Navigation {
  evt: string;

  constructor(nav: NavSense) {
    nav.sensor.subscribe( vw => this.evt = vw );
  }
}
