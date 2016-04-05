import {Injectable, EventEmitter} from 'angular2/core';
import {OnActivate} from 'angular2/router';

@Injectable()
export class NavSense {
  sensor: EventEmitter<string> = new EventEmitter();
}

export class NavComponent implements OnActivate {
  protected componentName: string;
  constructor(private nav: NavSense, cmpName: string) {
    this.componentName = cmpName;
  }

  routerOnActivate() {
    this.nav.sensor.emit(this.componentName);
    // return false;
  }

  ngOnDestroy() {
    this.nav.sensor.emit(null);
  }
}
