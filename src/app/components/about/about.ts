import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {NavComponent, NavSense} from './../../services/navigation';

@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class About extends NavComponent{

  constructor(http: Http, nav: NavSense) {
    super(nav, "About");
  }

  ngOnInit() {

  }
}
