import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['testServer', 'testServer2'];
  counter = 0;
  counterArr = [];

  constructor() { 
    // This runs when this component is created;
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  incrementCounter(){
    this.counterArr.push(this.counter++);
    console.log(this.counterArr)
  }
  ngOnInit(): void {
  }
  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  resetUserName(){
    this.userName = '';
  }

}
