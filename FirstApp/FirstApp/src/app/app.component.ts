// Imports what a component is from angular core
import { Component } from '@angular/core';

@Component({
  // Targets where to inject the code
  selector: 'app-root',
  // Either template or templateURL if you want to hardcode html here
  templateUrl: './app.component.html',
  // remove urls and hardcord css in here
  styleUrls: ['./app.component.css']
})
// Exporting variables for HTML ???
export class AppComponent {
  name = 'Rob';
}
