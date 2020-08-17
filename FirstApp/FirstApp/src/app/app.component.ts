import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Either template or templateURL
  //templateURL: './app.component.html',
  // Another way to create small components
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Rob';
}
