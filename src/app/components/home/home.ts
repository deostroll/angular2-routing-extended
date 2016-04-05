import {Component} from 'angular2/core';
import {NavComponent, NavSense} from './../../services/navigation';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Home extends NavComponent{

  constructor(nav: NavSense) {
    super(nav, "Home");
  }

  ngOnInit() {

  }

}
