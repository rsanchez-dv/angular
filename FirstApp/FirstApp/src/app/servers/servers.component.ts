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

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created."
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
  ngOnInit(): void {
  }

}
