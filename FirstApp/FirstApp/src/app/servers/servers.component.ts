import { Component, OnInit } from '@angular/core';

@Component({
  // Make by attribute
  selector: '[app-servers]',
  // Make by html tag
  //selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
