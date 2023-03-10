import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private socket: any;
  messages: string[] = [];
  message: string = '';

  constructor() {
    this.socket = io('http://localhost:4000');
    this.socket.on('new message', (data: any) => {
      this.messages.push(data.msg);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.socket.emit('send message', this.message);
      this.message = '';
    }
  }
}
