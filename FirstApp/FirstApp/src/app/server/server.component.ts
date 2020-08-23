import {Component} from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            
        }
    `]
})

export class ServerComponent {
    // the colon and type is not neccessary
    serverId: number = 10;
    serverStatus: string = 'Offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    getServerStatus (){
        return this.serverStatus;
    }
}