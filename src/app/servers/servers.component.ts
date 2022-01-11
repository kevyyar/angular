import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      input {
        width: 200px;
      }
    `,
  ],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreation: string = 'No server was created';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreation() {
    this.serverCreation = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
