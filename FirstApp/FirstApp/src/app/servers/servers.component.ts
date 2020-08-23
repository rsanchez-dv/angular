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
  serverCreated = false;
servers = ['Testserver', 'Testserver 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Name is " + this.serverName; 
    this.servers.push(this.serverName)
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;

  }
  ngOnInit(): void {
  }

}
