import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>{{ message }}</h3>
  `
})
export class HomeComponent {
  public message = `Angular Universal`;

  constructor() {}
}
